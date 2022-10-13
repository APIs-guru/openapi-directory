package shared

type ServiceMetadata struct {
	Category    *string `json:"category"`
	Description *string `json:"description"`
	DisplayName *string `json:"displayName"`
	Name        *string `json:"name"`
}
