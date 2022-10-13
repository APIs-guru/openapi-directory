package shared

type DeleteImageResponse struct {
	ImageBuildVersionArn *string `json:"imageBuildVersionArn"`
	RequestID            *string `json:"requestId"`
}
