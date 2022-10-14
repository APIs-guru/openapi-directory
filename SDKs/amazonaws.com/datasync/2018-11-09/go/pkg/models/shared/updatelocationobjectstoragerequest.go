package shared

type UpdateLocationObjectStorageRequest struct {
	AccessKey      *string                          `json:"AccessKey,omitempty"`
	AgentArns      []string                         `json:"AgentArns,omitempty"`
	LocationArn    string                           `json:"LocationArn"`
	SecretKey      *string                          `json:"SecretKey,omitempty"`
	ServerPort     *int64                           `json:"ServerPort,omitempty"`
	ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol,omitempty"`
	Subdirectory   *string                          `json:"Subdirectory,omitempty"`
}
