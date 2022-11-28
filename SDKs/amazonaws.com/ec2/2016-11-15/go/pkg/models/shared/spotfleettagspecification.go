package shared

// SpotFleetTagSpecification
// The tags for a Spot Fleet resource.
type SpotFleetTagSpecification struct {
	ResourceType *ResourceTypeEnum
	Tags         []Tag
}
