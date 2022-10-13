package shared

type StorageDescriptor struct {
	BucketColumns          []string          `json:"BucketColumns"`
	Columns                []Column          `json:"Columns"`
	Compressed             *bool             `json:"Compressed"`
	InputFormat            *string           `json:"InputFormat"`
	Location               *string           `json:"Location"`
	NumberOfBuckets        *int64            `json:"NumberOfBuckets"`
	OutputFormat           *string           `json:"OutputFormat"`
	Parameters             map[string]string `json:"Parameters"`
	SchemaReference        *SchemaReference  `json:"SchemaReference"`
	SerdeInfo              *SerDeInfo        `json:"SerdeInfo"`
	SkewedInfo             *SkewedInfo       `json:"SkewedInfo"`
	SortColumns            []Order           `json:"SortColumns"`
	StoredAsSubDirectories *bool             `json:"StoredAsSubDirectories"`
}
