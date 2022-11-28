package shared

type GetManagedPrefixListEntriesResult struct {
	Entries   []PrefixListEntry
	NextToken *string
}
