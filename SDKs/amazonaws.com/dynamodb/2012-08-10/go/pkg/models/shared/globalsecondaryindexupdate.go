package shared

type GlobalSecondaryIndexUpdate struct {
	Create *CreateGlobalSecondaryIndexAction `json:"Create"`
	Delete *DeleteGlobalSecondaryIndexAction `json:"Delete"`
	Update *UpdateGlobalSecondaryIndexAction `json:"Update"`
}
