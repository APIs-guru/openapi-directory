package shared

type DescribeUserStackAssociationsResult struct {
	NextToken             *string                `json:"NextToken,omitempty"`
	UserStackAssociations []UserStackAssociation `json:"UserStackAssociations,omitempty"`
}
