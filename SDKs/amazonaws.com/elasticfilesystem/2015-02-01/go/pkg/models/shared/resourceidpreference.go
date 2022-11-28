package shared

// ResourceIDPreference
// Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
type ResourceIDPreference struct {
	ResourceIDType *ResourceIDTypeEnum `json:"ResourceIdType,omitempty"`
	Resources      []ResourceEnum      `json:"Resources,omitempty"`
}
