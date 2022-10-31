package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubscribersForNotificationQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeSubscribersForNotificationXAmzTargetEnum string

const (
	DescribeSubscribersForNotificationXAmzTargetEnumAwsBudgetServiceGatewayDescribeSubscribersForNotification DescribeSubscribersForNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
)

type DescribeSubscribersForNotificationHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubscribersForNotificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeSubscribersForNotificationRequest struct {
	QueryParams DescribeSubscribersForNotificationQueryParams
	Headers     DescribeSubscribersForNotificationHeaders
	Request     shared.DescribeSubscribersForNotificationRequest `request:"mediaType=application/json"`
}

type DescribeSubscribersForNotificationResponse struct {
	AccessDeniedException                      *interface{}
	ContentType                                string
	DescribeSubscribersForNotificationResponse *shared.DescribeSubscribersForNotificationResponse
	ExpiredNextTokenException                  *interface{}
	InternalErrorException                     *interface{}
	InvalidNextTokenException                  *interface{}
	InvalidParameterException                  *interface{}
	NotFoundException                          *interface{}
	StatusCode                                 int64
}
