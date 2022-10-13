package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationTaskAssessmentResultsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationTaskAssessmentResultsXAmzTargetEnum string

const (
	DescribeReplicationTaskAssessmentResultsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskAssessmentResults DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"
)

type DescribeReplicationTaskAssessmentResultsHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationTaskAssessmentResultsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplicationTaskAssessmentResultsRequest struct {
	QueryParams DescribeReplicationTaskAssessmentResultsQueryParams
	Headers     DescribeReplicationTaskAssessmentResultsHeaders
	Request     shared.DescribeReplicationTaskAssessmentResultsMessage `request:"mediaType=application/json"`
}

type DescribeReplicationTaskAssessmentResultsResponse struct {
	ContentType                                      string
	DescribeReplicationTaskAssessmentResultsResponse *shared.DescribeReplicationTaskAssessmentResultsResponse
	ResourceNotFoundFault                            *interface{}
	StatusCode                                       int64
}
