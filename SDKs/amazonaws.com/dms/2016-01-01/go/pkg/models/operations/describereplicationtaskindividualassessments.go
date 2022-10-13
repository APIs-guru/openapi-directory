package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationTaskIndividualAssessmentsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum string

const (
	DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskIndividualAssessments DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments"
)

type DescribeReplicationTaskIndividualAssessmentsHeaders struct {
	XAmzAlgorithm     *string                                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplicationTaskIndividualAssessmentsRequest struct {
	QueryParams DescribeReplicationTaskIndividualAssessmentsQueryParams
	Headers     DescribeReplicationTaskIndividualAssessmentsHeaders
	Request     shared.DescribeReplicationTaskIndividualAssessmentsMessage `request:"mediaType=application/json"`
}

type DescribeReplicationTaskIndividualAssessmentsResponse struct {
	ContentType                                          string
	DescribeReplicationTaskIndividualAssessmentsResponse *shared.DescribeReplicationTaskIndividualAssessmentsResponse
	ResourceNotFoundFault                                *interface{}
	StatusCode                                           int64
}
