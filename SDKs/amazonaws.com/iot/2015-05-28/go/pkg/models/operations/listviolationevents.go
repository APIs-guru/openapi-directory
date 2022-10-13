package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListViolationEventsBehaviorCriteriaTypeEnum string

const (
	ListViolationEventsBehaviorCriteriaTypeEnumStatic          ListViolationEventsBehaviorCriteriaTypeEnum = "STATIC"
	ListViolationEventsBehaviorCriteriaTypeEnumStatistical     ListViolationEventsBehaviorCriteriaTypeEnum = "STATISTICAL"
	ListViolationEventsBehaviorCriteriaTypeEnumMachineLearning ListViolationEventsBehaviorCriteriaTypeEnum = "MACHINE_LEARNING"
)

type ListViolationEventsQueryParams struct {
	BehaviorCriteriaType *ListViolationEventsBehaviorCriteriaTypeEnum `queryParam:"style=form,explode=true,name=behaviorCriteriaType"`
	EndTime              time.Time                                    `queryParam:"style=form,explode=true,name=endTime"`
	ListSuppressedAlerts *bool                                        `queryParam:"style=form,explode=true,name=listSuppressedAlerts"`
	MaxResults           *int64                                       `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken            *string                                      `queryParam:"style=form,explode=true,name=nextToken"`
	SecurityProfileName  *string                                      `queryParam:"style=form,explode=true,name=securityProfileName"`
	StartTime            time.Time                                    `queryParam:"style=form,explode=true,name=startTime"`
	ThingName            *string                                      `queryParam:"style=form,explode=true,name=thingName"`
}

type ListViolationEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListViolationEventsRequest struct {
	QueryParams ListViolationEventsQueryParams
	Headers     ListViolationEventsHeaders
}

type ListViolationEventsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListViolationEventsResponse *shared.ListViolationEventsResponse
	StatusCode                  int64
	ThrottlingException         *interface{}
}
