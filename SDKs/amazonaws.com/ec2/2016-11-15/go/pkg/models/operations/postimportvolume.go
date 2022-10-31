package operations

type PostImportVolumeActionEnum string

const (
	PostImportVolumeActionEnumImportVolume PostImportVolumeActionEnum = "ImportVolume"
)

type PostImportVolumeVersionEnum string

const (
	PostImportVolumeVersionEnumTwoThousandAndSixteen1115 PostImportVolumeVersionEnum = "2016-11-15"
)

type PostImportVolumeQueryParams struct {
	Action  PostImportVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostImportVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostImportVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostImportVolumeRequest struct {
	QueryParams PostImportVolumeQueryParams
	Headers     PostImportVolumeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostImportVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
