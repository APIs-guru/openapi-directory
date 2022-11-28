package shared

// DatasetEntry
// The reference to a dataset entry.
type DatasetEntry struct {
	DataURI   *string `json:"dataURI,omitempty"`
	EntryName *string `json:"entryName,omitempty"`
}
