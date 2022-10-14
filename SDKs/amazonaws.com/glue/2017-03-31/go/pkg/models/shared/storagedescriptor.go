package shared

type StorageDescriptor struct {
	BucketColumns          []string          `json:"BucketColumns,omitempty"`
	Columns                []Column          `json:"Columns,omitempty"`
	Compressed             *bool             `json:"Compressed,omitempty"`
	InputFormat            *string           `json:"InputFormat,omitempty"`
	Location               *string           `json:"Location,omitempty"`
	NumberOfBuckets        *int64            `json:"NumberOfBuckets,omitempty"`
	OutputFormat           *string           `json:"OutputFormat,omitempty"`
	Parameters             map[string]string `json:"Parameters,omitempty"`
	SchemaReference        *SchemaReference  `json:"SchemaReference,omitempty"`
	SerdeInfo              *SerDeInfo        `json:"SerdeInfo,omitempty"`
	SkewedInfo             *SkewedInfo       `json:"SkewedInfo,omitempty"`
	SortColumns            []Order           `json:"SortColumns,omitempty"`
	StoredAsSubDirectories *bool             `json:"StoredAsSubDirectories,omitempty"`
}
