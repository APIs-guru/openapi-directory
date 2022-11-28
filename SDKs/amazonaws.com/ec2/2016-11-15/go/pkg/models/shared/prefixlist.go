package shared

// PrefixList
// Describes prefixes for Amazon Web Services services.
type PrefixList struct {
	Cidrs          []string
	PrefixListID   *string
	PrefixListName *string
}
