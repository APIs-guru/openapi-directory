package shared

type UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum string

const (
	UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnumRequired         UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum = "Required"
	UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnumIncludeByDefault UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum = "IncludeByDefault"
	UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnumExcludeByDefault UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum = "ExcludeByDefault"
)

type UpdateSystemModelsPackageTypeIDtoBundle struct {
	BundleID         string                                                       `json:"BundleID" form:"name=BundleID"`
	PackageTypeID    string                                                       `json:"PackageTypeID" form:"name=PackageTypeID"`
	PackageVersion   int32                                                        `json:"PackageVersion" form:"name=PackageVersion"`
	Priority         int32                                                        `json:"Priority" form:"name=Priority"`
	SubscriptionType *UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum `json:"SubscriptionType,omitempty" form:"name=SubscriptionType"`
}
