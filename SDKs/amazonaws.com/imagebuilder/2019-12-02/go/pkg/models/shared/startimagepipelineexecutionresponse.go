package shared

type StartImagePipelineExecutionResponse struct {
	ClientToken          *string `json:"clientToken,omitempty"`
	ImageBuildVersionArn *string `json:"imageBuildVersionArn,omitempty"`
	RequestID            *string `json:"requestId,omitempty"`
}
