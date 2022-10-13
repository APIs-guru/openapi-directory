package operations

type GetDescribeInstanceEventNotificationAttributesActionEnum string

const (
	GetDescribeInstanceEventNotificationAttributesActionEnumDescribeInstanceEventNotificationAttributes GetDescribeInstanceEventNotificationAttributesActionEnum = "DescribeInstanceEventNotificationAttributes"
)

type GetDescribeInstanceEventNotificationAttributesVersionEnum string

const (
	GetDescribeInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 GetDescribeInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)

type GetDescribeInstanceEventNotificationAttributesQueryParams struct {
	Action  GetDescribeInstanceEventNotificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                                     `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetDescribeInstanceEventNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeInstanceEventNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeInstanceEventNotificationAttributesRequest struct {
	QueryParams GetDescribeInstanceEventNotificationAttributesQueryParams
	Headers     GetDescribeInstanceEventNotificationAttributesHeaders
}

type GetDescribeInstanceEventNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
