package shared

type UpdateSystemModelsUpdateGroup struct {
	Description          string  `json:"Description" form:"name=Description"`
	ID                   *string `json:"ID,omitempty" form:"name=ID"`
	InventoryFrequency   *int32  `json:"InventoryFrequency,omitempty" form:"name=InventoryFrequency"`
	InventoryPackage     *string `json:"InventoryPackage,omitempty" form:"name=InventoryPackage"`
	LocalizedDescription *string `json:"LocalizedDescription,omitempty" form:"name=LocalizedDescription"`
	LocalizedName        *string `json:"LocalizedName,omitempty" form:"name=LocalizedName"`
	Priority             int32   `json:"Priority" form:"name=Priority"`
	ReportField          *string `json:"ReportField,omitempty" form:"name=ReportField"`
	UpdateType           string  `json:"UpdateType" form:"name=UpdateType"`
	ValidatingField      *string `json:"ValidatingField,omitempty" form:"name=ValidatingField"`
	ValueToValidate      *string `json:"ValueToValidate,omitempty" form:"name=ValueToValidate"`
	Version              *string `json:"Version,omitempty" form:"name=Version"`
}
