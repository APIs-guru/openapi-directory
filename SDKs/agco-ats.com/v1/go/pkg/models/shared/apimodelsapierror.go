package shared



type APIModelsAPIError struct {
    DeveloperMessage *string `json:"DeveloperMessage,omitempty"`
    ErrorCode *int32 `json:"ErrorCode,omitempty"`
    MoreInfo *string `json:"MoreInfo,omitempty"`
    UserMessage *string `json:"UserMessage,omitempty"`
    
}

