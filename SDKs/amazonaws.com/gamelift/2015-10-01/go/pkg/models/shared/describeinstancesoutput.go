package shared

type DescribeInstancesOutput struct {
	Instances []Instance `json:"Instances"`
	NextToken *string    `json:"NextToken"`
}
