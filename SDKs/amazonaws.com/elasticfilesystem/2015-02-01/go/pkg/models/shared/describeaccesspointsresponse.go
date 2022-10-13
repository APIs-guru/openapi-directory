package shared

type DescribeAccessPointsResponse struct {
	AccessPoints []AccessPointDescription `json:"AccessPoints"`
	NextToken    *string                  `json:"NextToken"`
}
