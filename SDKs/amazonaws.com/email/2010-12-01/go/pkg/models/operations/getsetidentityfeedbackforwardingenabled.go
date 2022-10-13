package operations

type GetSetIdentityFeedbackForwardingEnabledActionEnum string

const (
	GetSetIdentityFeedbackForwardingEnabledActionEnumSetIdentityFeedbackForwardingEnabled GetSetIdentityFeedbackForwardingEnabledActionEnum = "SetIdentityFeedbackForwardingEnabled"
)

type GetSetIdentityFeedbackForwardingEnabledVersionEnum string

const (
	GetSetIdentityFeedbackForwardingEnabledVersionEnumTwoThousandAndTen1201 GetSetIdentityFeedbackForwardingEnabledVersionEnum = "2010-12-01"
)

type GetSetIdentityFeedbackForwardingEnabledQueryParams struct {
	Action            GetSetIdentityFeedbackForwardingEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ForwardingEnabled bool                                               `queryParam:"style=form,explode=true,name=ForwardingEnabled"`
	Identity          string                                             `queryParam:"style=form,explode=true,name=Identity"`
	Version           GetSetIdentityFeedbackForwardingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetIdentityFeedbackForwardingEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetIdentityFeedbackForwardingEnabledRequest struct {
	QueryParams GetSetIdentityFeedbackForwardingEnabledQueryParams
	Headers     GetSetIdentityFeedbackForwardingEnabledHeaders
}

type GetSetIdentityFeedbackForwardingEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
