package shared

type DeleteImagePipelineResponse struct {
	ImagePipelineArn *string `json:"imagePipelineArn"`
	RequestID        *string `json:"requestId"`
}
