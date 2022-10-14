package shared

type UpdateSystemModelsPackageType struct {
	Attribute            *string `json:"Attribute,omitempty" form:"name=Attribute"`
	Category             *string `json:"Category,omitempty" form:"name=Category"`
	Description          string  `json:"Description" form:"name=Description"`
	Icon                 *string `json:"Icon,omitempty" form:"name=Icon"`
	InventoryFrequency   *int32  `json:"InventoryFrequency,omitempty" form:"name=InventoryFrequency"`
	InventoryPackage     *string `json:"InventoryPackage,omitempty" form:"name=InventoryPackage"`
	LocalizedDescription *string `json:"LocalizedDescription,omitempty" form:"name=LocalizedDescription"`
	LocalizedName        *string `json:"LocalizedName,omitempty" form:"name=LocalizedName"`
	MaxDeltaPackages     *int32  `json:"MaxDeltaPackages,omitempty" form:"name=MaxDeltaPackages"`
	PackageTypeID        *string `json:"PackageTypeID,omitempty" form:"name=PackageTypeID"`
}
