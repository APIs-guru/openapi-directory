package operations

type PostDescribeAutoScalingNotificationTypesActionEnum string

const (
	PostDescribeAutoScalingNotificationTypesActionEnumDescribeAutoScalingNotificationTypes PostDescribeAutoScalingNotificationTypesActionEnum = "DescribeAutoScalingNotificationTypes"
)

type PostDescribeAutoScalingNotificationTypesVersionEnum string

const (
	PostDescribeAutoScalingNotificationTypesVersionEnumTwoThousandAndEleven0101 PostDescribeAutoScalingNotificationTypesVersionEnum = "2011-01-01"
)

type PostDescribeAutoScalingNotificationTypesQueryParams struct {
	Action  PostDescribeAutoScalingNotificationTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAutoScalingNotificationTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAutoScalingNotificationTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAutoScalingNotificationTypesRequest struct {
	QueryParams PostDescribeAutoScalingNotificationTypesQueryParams
	Headers     PostDescribeAutoScalingNotificationTypesHeaders
}

type PostDescribeAutoScalingNotificationTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
