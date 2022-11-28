package shared

// ManagedPrefixList
// Describes a managed prefix list.
type ManagedPrefixList struct {
	AddressFamily  *string
	MaxEntries     *int64
	OwnerID        *string
	PrefixListArn  *string
	PrefixListID   *string
	PrefixListName *string
	State          *PrefixListStateEnum
	StateMessage   *string
	Tags           []Tag
	Version        *int64
}
