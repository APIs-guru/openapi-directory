package shared

type UpdateSystemModelsPackageType struct {
	Attribute            *string `json:"Attribute" form:"name=Attribute"`
	Category             *string `json:"Category" form:"name=Category"`
	Description          string  `json:"Description" form:"name=Description"`
	Icon                 *string `json:"Icon" form:"name=Icon"`
	InventoryFrequency   *int32  `json:"InventoryFrequency" form:"name=InventoryFrequency"`
	InventoryPackage     *string `json:"InventoryPackage" form:"name=InventoryPackage"`
	LocalizedDescription *string `json:"LocalizedDescription" form:"name=LocalizedDescription"`
	LocalizedName        *string `json:"LocalizedName" form:"name=LocalizedName"`
	MaxDeltaPackages     *int32  `json:"MaxDeltaPackages" form:"name=MaxDeltaPackages"`
	PackageTypeID        *string `json:"PackageTypeID" form:"name=PackageTypeID"`
}
