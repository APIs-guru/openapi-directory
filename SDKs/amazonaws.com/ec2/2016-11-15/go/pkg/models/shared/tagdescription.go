package shared

// TagDescription
// Describes a tag.
type TagDescription struct {
	Key          *string
	ResourceID   *string
	ResourceType *ResourceTypeEnum
	Value        *string
}
