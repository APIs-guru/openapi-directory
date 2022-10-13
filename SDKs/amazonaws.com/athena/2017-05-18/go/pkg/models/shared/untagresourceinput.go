package shared

type UntagResourceInput struct {
	ResourceArn string   `json:"ResourceARN"`
	TagKeys     []string `json:"TagKeys"`
}
