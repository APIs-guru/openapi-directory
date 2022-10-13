package shared

type CognitoStreams struct {
	RoleArn         *string              `json:"RoleArn"`
	StreamName      *string              `json:"StreamName"`
	StreamingStatus *StreamingStatusEnum `json:"StreamingStatus"`
}
