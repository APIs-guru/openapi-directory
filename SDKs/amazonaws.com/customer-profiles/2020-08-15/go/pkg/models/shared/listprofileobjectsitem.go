package shared

type ListProfileObjectsItem struct {
	Object                 *string `json:"Object"`
	ObjectTypeName         *string `json:"ObjectTypeName"`
	ProfileObjectUniqueKey *string `json:"ProfileObjectUniqueKey"`
}
