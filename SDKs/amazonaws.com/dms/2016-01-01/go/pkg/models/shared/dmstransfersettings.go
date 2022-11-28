package shared

// DmsTransferSettings
//
//	The settings in JSON format for the DMS Transfer type source endpoint.
type DmsTransferSettings struct {
	BucketName           *string `json:"BucketName,omitempty"`
	ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
}
