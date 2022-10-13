package shared

type UpdateComponentConfigurationRequest struct {
	ComponentConfiguration *string   `json:"ComponentConfiguration"`
	ComponentName          string    `json:"ComponentName"`
	Monitor                *bool     `json:"Monitor"`
	ResourceGroupName      string    `json:"ResourceGroupName"`
	Tier                   *TierEnum `json:"Tier"`
}
