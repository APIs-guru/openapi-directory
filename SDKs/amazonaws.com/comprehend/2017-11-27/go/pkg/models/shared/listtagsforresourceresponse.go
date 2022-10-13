package shared

type ListTagsForResourceResponse struct {
	ResourceArn *string `json:"ResourceArn"`
	Tags        []Tag   `json:"Tags"`
}
