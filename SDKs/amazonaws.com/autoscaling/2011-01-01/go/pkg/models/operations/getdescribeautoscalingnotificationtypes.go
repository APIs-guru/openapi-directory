package operations

type GetDescribeAutoScalingNotificationTypesActionEnum string

const (
	GetDescribeAutoScalingNotificationTypesActionEnumDescribeAutoScalingNotificationTypes GetDescribeAutoScalingNotificationTypesActionEnum = "DescribeAutoScalingNotificationTypes"
)

type GetDescribeAutoScalingNotificationTypesVersionEnum string

const (
	GetDescribeAutoScalingNotificationTypesVersionEnumTwoThousandAndEleven0101 GetDescribeAutoScalingNotificationTypesVersionEnum = "2011-01-01"
)

type GetDescribeAutoScalingNotificationTypesQueryParams struct {
	Action  GetDescribeAutoScalingNotificationTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeAutoScalingNotificationTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAutoScalingNotificationTypesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeAutoScalingNotificationTypesRequest struct {
	QueryParams GetDescribeAutoScalingNotificationTypesQueryParams
	Headers     GetDescribeAutoScalingNotificationTypesHeaders
}

type GetDescribeAutoScalingNotificationTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
