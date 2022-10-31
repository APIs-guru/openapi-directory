package operations

type PostEnableImageDeprecationActionEnum string

const (
	PostEnableImageDeprecationActionEnumEnableImageDeprecation PostEnableImageDeprecationActionEnum = "EnableImageDeprecation"
)

type PostEnableImageDeprecationVersionEnum string

const (
	PostEnableImageDeprecationVersionEnumTwoThousandAndSixteen1115 PostEnableImageDeprecationVersionEnum = "2016-11-15"
)

type PostEnableImageDeprecationQueryParams struct {
	Action  PostEnableImageDeprecationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableImageDeprecationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableImageDeprecationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableImageDeprecationRequest struct {
	QueryParams PostEnableImageDeprecationQueryParams
	Headers     PostEnableImageDeprecationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableImageDeprecationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
