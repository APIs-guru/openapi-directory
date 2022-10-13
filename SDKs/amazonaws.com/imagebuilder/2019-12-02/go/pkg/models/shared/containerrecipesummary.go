package shared

type ContainerRecipeSummary struct {
	Arn           *string            `json:"arn"`
	ContainerType *ContainerTypeEnum `json:"containerType"`
	DateCreated   *string            `json:"dateCreated"`
	Name          *string            `json:"name"`
	Owner         *string            `json:"owner"`
	ParentImage   *string            `json:"parentImage"`
	Platform      *PlatformEnum      `json:"platform"`
	Tags          map[string]string  `json:"tags"`
}
