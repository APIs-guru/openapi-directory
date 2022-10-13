package shared

type DescribeRegionsResult struct {
	NextToken          *string             `json:"NextToken"`
	RegionsDescription []RegionDescription `json:"RegionsDescription"`
}
