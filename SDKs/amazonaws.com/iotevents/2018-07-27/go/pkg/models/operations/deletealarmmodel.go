package operations

type DeleteAlarmModelPathParams struct {
	AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
}

type DeleteAlarmModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAlarmModelRequest struct {
	PathParams DeleteAlarmModelPathParams
	Headers    DeleteAlarmModelHeaders
}

type DeleteAlarmModelResponse struct {
	ContentType                 string
	DeleteAlarmModelResponse    map[string]interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
