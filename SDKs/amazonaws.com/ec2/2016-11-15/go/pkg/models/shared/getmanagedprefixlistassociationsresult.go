package shared

type GetManagedPrefixListAssociationsResult struct {
	NextToken              *string
	PrefixListAssociations []PrefixListAssociation
}
