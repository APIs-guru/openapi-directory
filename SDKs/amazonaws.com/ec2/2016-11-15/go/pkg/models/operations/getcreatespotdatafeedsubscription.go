package operations

type GetCreateSpotDatafeedSubscriptionActionEnum string

const (
	GetCreateSpotDatafeedSubscriptionActionEnumCreateSpotDatafeedSubscription GetCreateSpotDatafeedSubscriptionActionEnum = "CreateSpotDatafeedSubscription"
)

type GetCreateSpotDatafeedSubscriptionVersionEnum string

const (
	GetCreateSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 GetCreateSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)

type GetCreateSpotDatafeedSubscriptionQueryParams struct {
	Action  GetCreateSpotDatafeedSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Bucket  string                                       `queryParam:"style=form,explode=true,name=Bucket"`
	DryRun  *bool                                        `queryParam:"style=form,explode=true,name=DryRun"`
	Prefix  *string                                      `queryParam:"style=form,explode=true,name=Prefix"`
	Version GetCreateSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateSpotDatafeedSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateSpotDatafeedSubscriptionRequest struct {
	QueryParams GetCreateSpotDatafeedSubscriptionQueryParams
	Headers     GetCreateSpotDatafeedSubscriptionHeaders
}

type GetCreateSpotDatafeedSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
