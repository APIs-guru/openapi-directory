package shared

type Ami struct {
	AccountID   *string     `json:"accountId"`
	Description *string     `json:"description"`
	Image       *string     `json:"image"`
	Name        *string     `json:"name"`
	Region      *string     `json:"region"`
	State       *ImageState `json:"state"`
}
