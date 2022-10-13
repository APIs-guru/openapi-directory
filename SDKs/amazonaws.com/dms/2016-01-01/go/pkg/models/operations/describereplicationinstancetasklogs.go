package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationInstanceTaskLogsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationInstanceTaskLogsXAmzTargetEnum string

const (
	DescribeReplicationInstanceTaskLogsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationInstanceTaskLogs DescribeReplicationInstanceTaskLogsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs"
)

type DescribeReplicationInstanceTaskLogsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationInstanceTaskLogsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplicationInstanceTaskLogsRequest struct {
	QueryParams DescribeReplicationInstanceTaskLogsQueryParams
	Headers     DescribeReplicationInstanceTaskLogsHeaders
	Request     shared.DescribeReplicationInstanceTaskLogsMessage `request:"mediaType=application/json"`
}

type DescribeReplicationInstanceTaskLogsResponse struct {
	ContentType                                 string
	DescribeReplicationInstanceTaskLogsResponse *shared.DescribeReplicationInstanceTaskLogsResponse
	InvalidResourceStateFault                   *interface{}
	ResourceNotFoundFault                       *interface{}
	StatusCode                                  int64
}
