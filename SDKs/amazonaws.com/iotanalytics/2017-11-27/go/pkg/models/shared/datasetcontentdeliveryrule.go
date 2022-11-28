package shared

// DatasetContentDeliveryRule
// When dataset contents are created, they are delivered to destination specified here.
type DatasetContentDeliveryRule struct {
	Destination DatasetContentDeliveryDestination `json:"destination"`
	EntryName   *string                           `json:"entryName,omitempty"`
}
