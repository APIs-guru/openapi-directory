package operations

import (
	"openapi/pkg/models/shared"
)

type ListActiveViolationsBehaviorCriteriaTypeEnum string

const (
	ListActiveViolationsBehaviorCriteriaTypeEnumStatic          ListActiveViolationsBehaviorCriteriaTypeEnum = "STATIC"
	ListActiveViolationsBehaviorCriteriaTypeEnumStatistical     ListActiveViolationsBehaviorCriteriaTypeEnum = "STATISTICAL"
	ListActiveViolationsBehaviorCriteriaTypeEnumMachineLearning ListActiveViolationsBehaviorCriteriaTypeEnum = "MACHINE_LEARNING"
)

type ListActiveViolationsQueryParams struct {
	BehaviorCriteriaType *ListActiveViolationsBehaviorCriteriaTypeEnum `queryParam:"style=form,explode=true,name=behaviorCriteriaType"`
	ListSuppressedAlerts *bool                                         `queryParam:"style=form,explode=true,name=listSuppressedAlerts"`
	MaxResults           *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken            *string                                       `queryParam:"style=form,explode=true,name=nextToken"`
	SecurityProfileName  *string                                       `queryParam:"style=form,explode=true,name=securityProfileName"`
	ThingName            *string                                       `queryParam:"style=form,explode=true,name=thingName"`
}

type ListActiveViolationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListActiveViolationsRequest struct {
	QueryParams ListActiveViolationsQueryParams
	Headers     ListActiveViolationsHeaders
}

type ListActiveViolationsResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ListActiveViolationsResponse *shared.ListActiveViolationsResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
