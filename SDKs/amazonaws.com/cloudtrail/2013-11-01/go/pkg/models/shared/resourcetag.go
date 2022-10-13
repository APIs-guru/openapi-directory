package shared

type ResourceTag struct {
	ResourceID *string `json:"ResourceId"`
	TagsList   []Tag   `json:"TagsList"`
}
