package shared

// S3Action
// Describes an action to write data to an Amazon S3 bucket.
type S3Action struct {
	BucketName string                       `json:"bucketName"`
	CannedACL  *CannedAccessControlListEnum `json:"cannedAcl,omitempty"`
	Key        string                       `json:"key"`
	RoleArn    string                       `json:"roleArn"`
}
