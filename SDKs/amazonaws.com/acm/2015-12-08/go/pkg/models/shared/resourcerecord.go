package shared

type ResourceRecord struct {
	Name  string         `json:"Name"`
	Type  RecordTypeEnum `json:"Type"`
	Value string         `json:"Value"`
}
