package shared

type KeystoreItems struct {
	Algorithm *string
	Alias     *string
	Chain     []KeystoreChainItems
	EntryType *string
	Format    *string
}
