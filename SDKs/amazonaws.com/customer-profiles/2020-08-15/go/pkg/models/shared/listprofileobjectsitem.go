package shared

type ListProfileObjectsItem struct {
	Object                 *string `json:"Object,omitempty"`
	ObjectTypeName         *string `json:"ObjectTypeName,omitempty"`
	ProfileObjectUniqueKey *string `json:"ProfileObjectUniqueKey,omitempty"`
}
