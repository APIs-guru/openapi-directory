package shared

type DatasetContentDeliveryRule struct {
	Destination DatasetContentDeliveryDestination `json:"destination"`
	EntryName   *string                           `json:"entryName"`
}
