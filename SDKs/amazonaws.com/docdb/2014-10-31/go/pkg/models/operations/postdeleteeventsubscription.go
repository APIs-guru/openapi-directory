package operations

type PostDeleteEventSubscriptionActionEnum string

const (
	PostDeleteEventSubscriptionActionEnumDeleteEventSubscription PostDeleteEventSubscriptionActionEnum = "DeleteEventSubscription"
)

type PostDeleteEventSubscriptionVersionEnum string

const (
	PostDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031 PostDeleteEventSubscriptionVersionEnum = "2014-10-31"
)

type PostDeleteEventSubscriptionQueryParams struct {
	Action  PostDeleteEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteEventSubscriptionRequest struct {
	QueryParams PostDeleteEventSubscriptionQueryParams
	Headers     PostDeleteEventSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
