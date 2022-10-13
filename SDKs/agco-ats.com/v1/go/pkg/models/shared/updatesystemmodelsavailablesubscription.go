package shared

type UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum string

const (
	UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnumRequired         UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum = "Required"
	UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnumIncludeByDefault UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum = "IncludeByDefault"
	UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnumExcludeByDefault UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum = "ExcludeByDefault"
)

type UpdateSystemModelsAvailableSubscription struct {
	PackageType      *UpdateSystemModelsPackageType                               `json:"PackageType"`
	SubscriptionType *UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum `json:"SubscriptionType"`
}
