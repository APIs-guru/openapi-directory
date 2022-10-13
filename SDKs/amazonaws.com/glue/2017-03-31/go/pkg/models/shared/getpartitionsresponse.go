package shared

type GetPartitionsResponse struct {
	NextToken  *string     `json:"NextToken"`
	Partitions []Partition `json:"Partitions"`
}
