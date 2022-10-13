package operations

type GetDisableImageDeprecationActionEnum string

const (
	GetDisableImageDeprecationActionEnumDisableImageDeprecation GetDisableImageDeprecationActionEnum = "DisableImageDeprecation"
)

type GetDisableImageDeprecationVersionEnum string

const (
	GetDisableImageDeprecationVersionEnumTwoThousandAndSixteen1115 GetDisableImageDeprecationVersionEnum = "2016-11-15"
)

type GetDisableImageDeprecationQueryParams struct {
	Action  GetDisableImageDeprecationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	ImageID string                                `queryParam:"style=form,explode=true,name=ImageId"`
	Version GetDisableImageDeprecationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableImageDeprecationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableImageDeprecationRequest struct {
	QueryParams GetDisableImageDeprecationQueryParams
	Headers     GetDisableImageDeprecationHeaders
}

type GetDisableImageDeprecationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
