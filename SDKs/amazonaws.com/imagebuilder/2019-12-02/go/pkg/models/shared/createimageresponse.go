package shared

type CreateImageResponse struct {
	ClientToken          *string `json:"clientToken"`
	ImageBuildVersionArn *string `json:"imageBuildVersionArn"`
	RequestID            *string `json:"requestId"`
}
