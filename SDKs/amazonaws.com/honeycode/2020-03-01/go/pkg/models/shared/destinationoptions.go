package shared

// DestinationOptions
// An object that contains the options relating to the destination of the import request.
type DestinationOptions struct {
	ColumnMap map[string]SourceDataColumnProperties `json:"columnMap,omitempty"`
}
