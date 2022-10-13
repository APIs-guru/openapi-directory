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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
