package operations

type GetDeleteSpotDatafeedSubscriptionActionEnum string

const (
	GetDeleteSpotDatafeedSubscriptionActionEnumDeleteSpotDatafeedSubscription GetDeleteSpotDatafeedSubscriptionActionEnum = "DeleteSpotDatafeedSubscription"
)

type GetDeleteSpotDatafeedSubscriptionVersionEnum string

const (
	GetDeleteSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 GetDeleteSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)

type GetDeleteSpotDatafeedSubscriptionQueryParams struct {
	Action  GetDeleteSpotDatafeedSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                        `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetDeleteSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSpotDatafeedSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteSpotDatafeedSubscriptionRequest struct {
	QueryParams GetDeleteSpotDatafeedSubscriptionQueryParams
	Headers     GetDeleteSpotDatafeedSubscriptionHeaders
}

type GetDeleteSpotDatafeedSubscriptionResponse struct {
	ContentType string
	StatusCode  int64
}
