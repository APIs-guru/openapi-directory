package shared

type CreateLocationObjectStorageRequest struct {
	AccessKey      *string                          `json:"AccessKey"`
	AgentArns      []string                         `json:"AgentArns"`
	BucketName     string                           `json:"BucketName"`
	SecretKey      *string                          `json:"SecretKey"`
	ServerHostname string                           `json:"ServerHostname"`
	ServerPort     *int64                           `json:"ServerPort"`
	ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol"`
	Subdirectory   *string                          `json:"Subdirectory"`
	Tags           []TagListEntry                   `json:"Tags"`
}
