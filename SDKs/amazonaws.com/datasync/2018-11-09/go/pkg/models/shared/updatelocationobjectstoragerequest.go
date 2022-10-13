package shared

type UpdateLocationObjectStorageRequest struct {
	AccessKey      *string                          `json:"AccessKey"`
	AgentArns      []string                         `json:"AgentArns"`
	LocationArn    string                           `json:"LocationArn"`
	SecretKey      *string                          `json:"SecretKey"`
	ServerPort     *int64                           `json:"ServerPort"`
	ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol"`
	Subdirectory   *string                          `json:"Subdirectory"`
}
