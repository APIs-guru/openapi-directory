package shared

type ResourceIDPreference struct {
	ResourceIDType *ResourceIDTypeEnum `json:"ResourceIdType"`
	Resources      []ResourceEnum      `json:"Resources"`
}
