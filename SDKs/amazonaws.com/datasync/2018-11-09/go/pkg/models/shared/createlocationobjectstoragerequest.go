package shared

// CreateLocationObjectStorageRequest
// CreateLocationObjectStorageRequest
type CreateLocationObjectStorageRequest struct {
	AccessKey      *string                          `json:"AccessKey,omitempty"`
	AgentArns      []string                         `json:"AgentArns"`
	BucketName     string                           `json:"BucketName"`
	SecretKey      *string                          `json:"SecretKey,omitempty"`
	ServerHostname string                           `json:"ServerHostname"`
	ServerPort     *int64                           `json:"ServerPort,omitempty"`
	ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol,omitempty"`
	Subdirectory   *string                          `json:"Subdirectory,omitempty"`
	Tags           []TagListEntry                   `json:"Tags,omitempty"`
}
