package shared

type DestinationOptions struct {
	ColumnMap map[string]SourceDataColumnProperties `json:"columnMap,omitempty"`
}
