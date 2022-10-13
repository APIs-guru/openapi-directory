package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAlarmPathParams struct {
	AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
}

type DescribeAlarmQueryParams struct {
	KeyValue *string `queryParam:"style=form,explode=true,name=keyValue"`
}

type DescribeAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAlarmRequest struct {
	PathParams  DescribeAlarmPathParams
	QueryParams DescribeAlarmQueryParams
	Headers     DescribeAlarmHeaders
}

type DescribeAlarmResponse struct {
	ContentType                 string
	DescribeAlarmResponse       *shared.DescribeAlarmResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
