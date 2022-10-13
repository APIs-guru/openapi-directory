package shared

type UpdateSystemModelsBundle struct {
	Active        *bool   `json:"Active" form:"name=Active"`
	BundleID      *string `json:"BundleID" form:"name=BundleID"`
	BundleNumber  int32   `json:"BundleNumber" form:"name=BundleNumber"`
	Description   string  `json:"Description" form:"name=Description"`
	UpdateGroupID string  `json:"UpdateGroupID" form:"name=UpdateGroupID"`
}
