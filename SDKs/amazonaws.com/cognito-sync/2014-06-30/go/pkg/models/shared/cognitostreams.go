package shared



type CognitoStreams struct {
    RoleArn *string `json:"RoleArn,omitempty"`
    StreamName *string `json:"StreamName,omitempty"`
    StreamingStatus *StreamingStatusEnum `json:"StreamingStatus,omitempty"`
    
}

