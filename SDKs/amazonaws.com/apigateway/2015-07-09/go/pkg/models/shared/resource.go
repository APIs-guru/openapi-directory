package shared

type Resource struct {
	ID              *string           `json:"id"`
	ParentID        *string           `json:"parentId"`
	Path            *string           `json:"path"`
	PathPart        *string           `json:"pathPart"`
	ResourceMethods map[string]Method `json:"resourceMethods"`
}
