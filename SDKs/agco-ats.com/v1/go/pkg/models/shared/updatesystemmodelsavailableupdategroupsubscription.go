package shared

type UpdateSystemModelsAvailableUpdateGroupSubscription struct {
	AvailableSubscriptions []UpdateSystemModelsAvailableSubscription `json:"AvailableSubscriptions"`
	UpdateGroup            *UpdateSystemModelsUpdateGroup            `json:"UpdateGroup"`
}
