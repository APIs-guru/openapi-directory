package operations

type PostCreateSpotDatafeedSubscriptionActionEnum string

const (
	PostCreateSpotDatafeedSubscriptionActionEnumCreateSpotDatafeedSubscription PostCreateSpotDatafeedSubscriptionActionEnum = "CreateSpotDatafeedSubscription"
)

type PostCreateSpotDatafeedSubscriptionVersionEnum string

const (
	PostCreateSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 PostCreateSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)

type PostCreateSpotDatafeedSubscriptionQueryParams struct {
	Action  PostCreateSpotDatafeedSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSpotDatafeedSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSpotDatafeedSubscriptionRequest struct {
	QueryParams PostCreateSpotDatafeedSubscriptionQueryParams
	Headers     PostCreateSpotDatafeedSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSpotDatafeedSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
