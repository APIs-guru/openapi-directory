package shared

type GetGroupVersionResponse struct {
	Arn               *string       `json:"Arn"`
	CreationTimestamp *string       `json:"CreationTimestamp"`
	Definition        *GroupVersion `json:"Definition"`
	ID                *string       `json:"Id"`
	Version           *string       `json:"Version"`
}
