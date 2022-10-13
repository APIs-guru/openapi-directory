package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeConnectionsXAmzTargetEnum string

const (
	DescribeConnectionsXAmzTargetEnumAmazonDmSv20160101DescribeConnections DescribeConnectionsXAmzTargetEnum = "AmazonDMSv20160101.DescribeConnections"
)

type DescribeConnectionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionsRequest struct {
	QueryParams DescribeConnectionsQueryParams
	Headers     DescribeConnectionsHeaders
	Request     shared.DescribeConnectionsMessage `request:"mediaType=application/json"`
}

type DescribeConnectionsResponse struct {
	ContentType                 string
	DescribeConnectionsResponse *shared.DescribeConnectionsResponse
	ResourceNotFoundFault       *interface{}
	StatusCode                  int64
}
