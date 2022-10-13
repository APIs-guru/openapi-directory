package shared

type DescribeVolumesRequest struct {
	Filters    []VolumeFilter `json:"Filters"`
	MaxResults *int64         `json:"MaxResults"`
	NextToken  *string        `json:"NextToken"`
	VolumeIds  []string       `json:"VolumeIds"`
}
