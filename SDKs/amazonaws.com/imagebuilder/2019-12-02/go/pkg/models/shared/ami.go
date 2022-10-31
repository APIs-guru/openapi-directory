package shared

type Ami struct {
	AccountID   *string     `json:"accountId,omitempty"`
	Description *string     `json:"description,omitempty"`
	Image       *string     `json:"image,omitempty"`
	Name        *string     `json:"name,omitempty"`
	Region      *string     `json:"region,omitempty"`
	State       *ImageState `json:"state,omitempty"`
}
