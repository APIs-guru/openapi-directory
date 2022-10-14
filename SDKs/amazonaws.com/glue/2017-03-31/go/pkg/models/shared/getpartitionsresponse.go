package shared

type GetPartitionsResponse struct {
	NextToken  *string     `json:"NextToken,omitempty"`
	Partitions []Partition `json:"Partitions,omitempty"`
}
