package shared

type DmsTransferSettings struct {
	BucketName           *string `json:"BucketName,omitempty"`
	ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
}
