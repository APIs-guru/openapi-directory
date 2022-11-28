package shared

type DescribePrefixListsResult struct {
	NextToken   *string
	PrefixLists []PrefixList
}
