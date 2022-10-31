package shared



type UpdateSystemModelsAvailableUpdateGroupSubscription struct {
    AvailableSubscriptions []UpdateSystemModelsAvailableSubscription `json:"AvailableSubscriptions,omitempty"`
    UpdateGroup *UpdateSystemModelsUpdateGroup `json:"UpdateGroup,omitempty"`
    
}

