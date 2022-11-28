package shared

// GlobalResourcesSharedModelsGlobalImageCategory
// An image category from the Global Image library.
type GlobalResourcesSharedModelsGlobalImageCategory struct {
	ID   *string `json:"Id,omitempty" form:"name=Id"`
	Name string  `json:"Name" form:"name=Name"`
}
