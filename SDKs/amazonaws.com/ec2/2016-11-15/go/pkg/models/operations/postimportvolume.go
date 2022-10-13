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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
