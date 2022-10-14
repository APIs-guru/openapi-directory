package shared

type ListArchivesRequest struct {
	EventSourceArn *string           `json:"EventSourceArn,omitempty"`
	Limit          *int64            `json:"Limit,omitempty"`
	NamePrefix     *string           `json:"NamePrefix,omitempty"`
	NextToken      *string           `json:"NextToken,omitempty"`
	State          *ArchiveStateEnum `json:"State,omitempty"`
}
