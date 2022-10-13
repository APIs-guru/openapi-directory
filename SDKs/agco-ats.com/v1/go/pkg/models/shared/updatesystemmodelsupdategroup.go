package shared

type UpdateSystemModelsUpdateGroup struct {
	Description          string  `json:"Description" form:"name=Description"`
	ID                   *string `json:"ID" form:"name=ID"`
	InventoryFrequency   *int32  `json:"InventoryFrequency" form:"name=InventoryFrequency"`
	InventoryPackage     *string `json:"InventoryPackage" form:"name=InventoryPackage"`
	LocalizedDescription *string `json:"LocalizedDescription" form:"name=LocalizedDescription"`
	LocalizedName        *string `json:"LocalizedName" form:"name=LocalizedName"`
	Priority             int32   `json:"Priority" form:"name=Priority"`
	ReportField          *string `json:"ReportField" form:"name=ReportField"`
	UpdateType           string  `json:"UpdateType" form:"name=UpdateType"`
	ValidatingField      *string `json:"ValidatingField" form:"name=ValidatingField"`
	ValueToValidate      *string `json:"ValueToValidate" form:"name=ValueToValidate"`
	Version              *string `json:"Version" form:"name=Version"`
}
