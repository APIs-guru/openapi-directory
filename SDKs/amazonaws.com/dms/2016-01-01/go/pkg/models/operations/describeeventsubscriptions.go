package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventSubscriptionsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeEventSubscriptionsXAmzTargetEnum string

const (
	DescribeEventSubscriptionsXAmzTargetEnumAmazonDmSv20160101DescribeEventSubscriptions DescribeEventSubscriptionsXAmzTargetEnum = "AmazonDMSv20160101.DescribeEventSubscriptions"
)

type DescribeEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventSubscriptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEventSubscriptionsRequest struct {
	QueryParams DescribeEventSubscriptionsQueryParams
	Headers     DescribeEventSubscriptionsHeaders
	Request     shared.DescribeEventSubscriptionsMessage `request:"mediaType=application/json"`
}

type DescribeEventSubscriptionsResponse struct {
	ContentType                        string
	DescribeEventSubscriptionsResponse *shared.DescribeEventSubscriptionsResponse
	ResourceNotFoundFault              *interface{}
	StatusCode                         int64
}
