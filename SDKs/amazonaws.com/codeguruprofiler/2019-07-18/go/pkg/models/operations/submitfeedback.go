package operations

type SubmitFeedbackPathParams struct {
	AnomalyInstanceID  string `pathParam:"style=simple,explode=false,name=anomalyInstanceId"`
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type SubmitFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SubmitFeedbackRequestBodyTypeEnum string

const (
	SubmitFeedbackRequestBodyTypeEnumPositive SubmitFeedbackRequestBodyTypeEnum = "Positive"
	SubmitFeedbackRequestBodyTypeEnumNegative SubmitFeedbackRequestBodyTypeEnum = "Negative"
)

type SubmitFeedbackRequestBody struct {
	Comment *string                           `json:"comment,omitempty"`
	Type    SubmitFeedbackRequestBodyTypeEnum `json:"type"`
}

type SubmitFeedbackRequest struct {
	PathParams SubmitFeedbackPathParams
	Headers    SubmitFeedbackHeaders
	Request    SubmitFeedbackRequestBody `request:"mediaType=application/json"`
}

type SubmitFeedbackResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	SubmitFeedbackResponse    map[string]interface{}
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
