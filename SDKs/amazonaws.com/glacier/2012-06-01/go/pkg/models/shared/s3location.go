package shared

// S3Location
// Contains information about the location in Amazon S3 where the select job results are stored.
type S3Location struct {
	AccessControlList []Grant           `json:"AccessControlList,omitempty"`
	BucketName        *string           `json:"BucketName,omitempty"`
	CannedACL         *CannedACLEnum    `json:"CannedACL,omitempty"`
	Encryption        *Encryption       `json:"Encryption,omitempty"`
	Prefix            *string           `json:"Prefix,omitempty"`
	StorageClass      *StorageClassEnum `json:"StorageClass,omitempty"`
	Tagging           map[string]string `json:"Tagging,omitempty"`
	UserMetadata      map[string]string `json:"UserMetadata,omitempty"`
}
