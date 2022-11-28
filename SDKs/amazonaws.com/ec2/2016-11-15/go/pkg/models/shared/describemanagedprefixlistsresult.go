package shared

type DescribeManagedPrefixListsResult struct {
	NextToken   *string
	PrefixLists []ManagedPrefixList
}
