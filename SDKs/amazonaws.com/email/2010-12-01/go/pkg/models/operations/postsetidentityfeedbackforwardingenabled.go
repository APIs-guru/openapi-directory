package operations

type PostSetIdentityFeedbackForwardingEnabledActionEnum string

const (
	PostSetIdentityFeedbackForwardingEnabledActionEnumSetIdentityFeedbackForwardingEnabled PostSetIdentityFeedbackForwardingEnabledActionEnum = "SetIdentityFeedbackForwardingEnabled"
)

type PostSetIdentityFeedbackForwardingEnabledVersionEnum string

const (
	PostSetIdentityFeedbackForwardingEnabledVersionEnumTwoThousandAndTen1201 PostSetIdentityFeedbackForwardingEnabledVersionEnum = "2010-12-01"
)

type PostSetIdentityFeedbackForwardingEnabledQueryParams struct {
	Action  PostSetIdentityFeedbackForwardingEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIdentityFeedbackForwardingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIdentityFeedbackForwardingEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetIdentityFeedbackForwardingEnabledRequest struct {
	QueryParams PostSetIdentityFeedbackForwardingEnabledQueryParams
	Headers     PostSetIdentityFeedbackForwardingEnabledHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIdentityFeedbackForwardingEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
