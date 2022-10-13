package shared

type DescribeVolumesResponse struct {
	NextToken *string  `json:"NextToken"`
	Volumes   []Volume `json:"Volumes"`
}
