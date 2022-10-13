package shared

type DescribeUsersResult struct {
	NextToken *string `json:"NextToken"`
	Users     []User  `json:"Users"`
}
