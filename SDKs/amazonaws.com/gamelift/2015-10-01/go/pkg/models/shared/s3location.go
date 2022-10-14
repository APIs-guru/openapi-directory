package shared

type S3Location struct {
	Bucket        *string `json:"Bucket,omitempty"`
	Key           *string `json:"Key,omitempty"`
	ObjectVersion *string `json:"ObjectVersion,omitempty"`
	RoleArn       *string `json:"RoleArn,omitempty"`
}
