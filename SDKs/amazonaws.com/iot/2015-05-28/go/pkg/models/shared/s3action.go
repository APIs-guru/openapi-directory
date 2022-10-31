package shared



type S3Action struct {
    BucketName string `json:"bucketName"`
    CannedACL *CannedAccessControlListEnum `json:"cannedAcl,omitempty"`
    Key string `json:"key"`
    RoleArn string `json:"roleArn"`
    
}

