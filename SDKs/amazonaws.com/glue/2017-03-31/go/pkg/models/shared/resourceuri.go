package shared

type ResourceURI struct {
	ResourceType *ResourceTypeEnum `json:"ResourceType"`
	URI          *string           `json:"Uri"`
}
