package shared

type UntagResourceRequest struct {
	Keys        []string `json:"Keys"`
	ResourceArn string   `json:"ResourceArn"`
}
