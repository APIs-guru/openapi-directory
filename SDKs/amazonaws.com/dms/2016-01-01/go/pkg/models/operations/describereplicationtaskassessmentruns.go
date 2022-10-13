package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationTaskAssessmentRunsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationTaskAssessmentRunsXAmzTargetEnum string

const (
	DescribeReplicationTaskAssessmentRunsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskAssessmentRuns DescribeReplicationTaskAssessmentRunsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns"
)

type DescribeReplicationTaskAssessmentRunsHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationTaskAssessmentRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplicationTaskAssessmentRunsRequest struct {
	QueryParams DescribeReplicationTaskAssessmentRunsQueryParams
	Headers     DescribeReplicationTaskAssessmentRunsHeaders
	Request     shared.DescribeReplicationTaskAssessmentRunsMessage `request:"mediaType=application/json"`
}

type DescribeReplicationTaskAssessmentRunsResponse struct {
	ContentType                                   string
	DescribeReplicationTaskAssessmentRunsResponse *shared.DescribeReplicationTaskAssessmentRunsResponse
	ResourceNotFoundFault                         *interface{}
	StatusCode                                    int64
}
