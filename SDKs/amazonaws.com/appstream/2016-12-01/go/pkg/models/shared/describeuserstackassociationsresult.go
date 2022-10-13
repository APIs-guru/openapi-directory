package shared

type DescribeUserStackAssociationsResult struct {
	NextToken             *string                `json:"NextToken"`
	UserStackAssociations []UserStackAssociation `json:"UserStackAssociations"`
}
