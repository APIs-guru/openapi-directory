package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicableIndividualAssessmentsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeApplicableIndividualAssessmentsXAmzTargetEnum string

const (
	DescribeApplicableIndividualAssessmentsXAmzTargetEnumAmazonDmSv20160101DescribeApplicableIndividualAssessments DescribeApplicableIndividualAssessmentsXAmzTargetEnum = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
)

type DescribeApplicableIndividualAssessmentsHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeApplicableIndividualAssessmentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeApplicableIndividualAssessmentsRequest struct {
	QueryParams DescribeApplicableIndividualAssessmentsQueryParams
	Headers     DescribeApplicableIndividualAssessmentsHeaders
	Request     shared.DescribeApplicableIndividualAssessmentsMessage `request:"mediaType=application/json"`
}

type DescribeApplicableIndividualAssessmentsResponse struct {
	AccessDeniedFault                               *interface{}
	ContentType                                     string
	DescribeApplicableIndividualAssessmentsResponse *shared.DescribeApplicableIndividualAssessmentsResponse
	InvalidResourceStateFault                       *interface{}
	ResourceNotFoundFault                           *interface{}
	StatusCode                                      int64
}
