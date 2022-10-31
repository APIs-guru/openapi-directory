package shared

type GetGroupVersionResponse struct {
	Arn               *string       `json:"Arn,omitempty"`
	CreationTimestamp *string       `json:"CreationTimestamp,omitempty"`
	Definition        *GroupVersion `json:"Definition,omitempty"`
	ID                *string       `json:"Id,omitempty"`
	Version           *string       `json:"Version,omitempty"`
}
