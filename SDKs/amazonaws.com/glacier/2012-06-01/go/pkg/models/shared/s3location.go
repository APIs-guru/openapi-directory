package shared

type S3Location struct {
	AccessControlList []Grant           `json:"AccessControlList"`
	BucketName        *string           `json:"BucketName"`
	CannedACL         *CannedACLEnum    `json:"CannedACL"`
	Encryption        *Encryption       `json:"Encryption"`
	Prefix            *string           `json:"Prefix"`
	StorageClass      *StorageClassEnum `json:"StorageClass"`
	Tagging           map[string]string `json:"Tagging"`
	UserMetadata      map[string]string `json:"UserMetadata"`
}
