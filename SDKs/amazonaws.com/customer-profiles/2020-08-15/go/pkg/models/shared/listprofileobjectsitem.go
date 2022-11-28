package shared

// ListProfileObjectsItem
// A ProfileObject in a list of ProfileObjects.
type ListProfileObjectsItem struct {
	Object                 *string `json:"Object,omitempty"`
	ObjectTypeName         *string `json:"ObjectTypeName,omitempty"`
	ProfileObjectUniqueKey *string `json:"ProfileObjectUniqueKey,omitempty"`
}
