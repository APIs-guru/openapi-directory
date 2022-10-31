package operations

type PostCreateVolumeActionEnum string

const (
	PostCreateVolumeActionEnumCreateVolume PostCreateVolumeActionEnum = "CreateVolume"
)

type PostCreateVolumeVersionEnum string

const (
	PostCreateVolumeVersionEnumTwoThousandAndSixteen1115 PostCreateVolumeVersionEnum = "2016-11-15"
)

type PostCreateVolumeQueryParams struct {
	Action  PostCreateVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateVolumeRequest struct {
	QueryParams PostCreateVolumeQueryParams
	Headers     PostCreateVolumeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
