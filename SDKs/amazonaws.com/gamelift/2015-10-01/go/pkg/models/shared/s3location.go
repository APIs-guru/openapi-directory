package shared

type S3Location struct {
	Bucket        *string `json:"Bucket"`
	Key           *string `json:"Key"`
	ObjectVersion *string `json:"ObjectVersion"`
	RoleArn       *string `json:"RoleArn"`
}
