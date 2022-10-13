package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAlarmModelPathParams struct {
	AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
}

type DescribeAlarmModelQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type DescribeAlarmModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAlarmModelRequest struct {
	PathParams  DescribeAlarmModelPathParams
	QueryParams DescribeAlarmModelQueryParams
	Headers     DescribeAlarmModelHeaders
}

type DescribeAlarmModelResponse struct {
	ContentType                 string
	DescribeAlarmModelResponse  *shared.DescribeAlarmModelResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
