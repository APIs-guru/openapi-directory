package shared

type ListTagsForResourceMessage struct {
	ResourceArn     *string  `json:"ResourceArn"`
	ResourceArnList []string `json:"ResourceArnList"`
}
