package shared

type DescribeIamInstanceProfileAssociationsResult struct {
	IamInstanceProfileAssociations []IamInstanceProfileAssociation
	NextToken                      *string
}
