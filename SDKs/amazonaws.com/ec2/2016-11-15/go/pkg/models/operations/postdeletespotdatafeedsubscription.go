package operations

type PostDeleteSpotDatafeedSubscriptionActionEnum string

const (
	PostDeleteSpotDatafeedSubscriptionActionEnumDeleteSpotDatafeedSubscription PostDeleteSpotDatafeedSubscriptionActionEnum = "DeleteSpotDatafeedSubscription"
)

type PostDeleteSpotDatafeedSubscriptionVersionEnum string

const (
	PostDeleteSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 PostDeleteSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)

type PostDeleteSpotDatafeedSubscriptionQueryParams struct {
	Action  PostDeleteSpotDatafeedSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSpotDatafeedSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSpotDatafeedSubscriptionRequest struct {
	QueryParams PostDeleteSpotDatafeedSubscriptionQueryParams
	Headers     PostDeleteSpotDatafeedSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSpotDatafeedSubscriptionResponse struct {
	ContentType string
	StatusCode  int64
}
