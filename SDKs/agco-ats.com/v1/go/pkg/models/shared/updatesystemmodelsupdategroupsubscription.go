package shared



type UpdateSystemModelsUpdateGroupSubscription struct {
    ClientID string `json:"ClientID" form:"name=ClientID"`
    Include bool `json:"Include" form:"name=Include"`
    PackageTypeID string `json:"PackageTypeID" form:"name=PackageTypeID"`
    UpdateGroupID string `json:"UpdateGroupID" form:"name=UpdateGroupID"`
    UpdateGroupSubscriptionID *int32 `json:"UpdateGroupSubscriptionID,omitempty" form:"name=UpdateGroupSubscriptionID"`
    
}

