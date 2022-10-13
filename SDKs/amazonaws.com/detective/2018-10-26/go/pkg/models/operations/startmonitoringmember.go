package operations

type StartMonitoringMemberHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartMonitoringMemberRequestBody struct {
	AccountID string `json:"AccountId"`
	GraphArn  string `json:"GraphArn"`
}

type StartMonitoringMemberRequest struct {
	Headers StartMonitoringMemberHeaders
	Request StartMonitoringMemberRequestBody `request:"mediaType=application/json"`
}

type StartMonitoringMemberResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
