package shared

type APIModelsAPIError struct {
	DeveloperMessage *string `json:"DeveloperMessage"`
	ErrorCode        *int32  `json:"ErrorCode"`
	MoreInfo         *string `json:"MoreInfo"`
	UserMessage      *string `json:"UserMessage"`
}
