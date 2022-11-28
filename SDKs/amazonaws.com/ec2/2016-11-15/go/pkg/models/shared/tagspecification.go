package shared

// TagSpecification
// The tags to apply to a resource when the resource is being created.
type TagSpecification struct {
	ResourceType *ResourceTypeEnum
	Tags         []Tag
}
