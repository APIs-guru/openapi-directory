package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeEventsXAmzTargetEnum string

const (
	DescribeEventsXAmzTargetEnumAmazonDmSv20160101DescribeEvents DescribeEventsXAmzTargetEnum = "AmazonDMSv20160101.DescribeEvents"
)

type DescribeEventsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventsRequest struct {
	QueryParams DescribeEventsQueryParams
	Headers     DescribeEventsHeaders
	Request     shared.DescribeEventsMessage `request:"mediaType=application/json"`
}

type DescribeEventsResponse struct {
	ContentType            string
	DescribeEventsResponse *shared.DescribeEventsResponse
	StatusCode             int64
}
