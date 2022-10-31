package shared

type ScanInput struct {
	AttributesToGet   []string             `json:"AttributesToGet,omitempty"`
	Count             *bool                `json:"Count,omitempty"`
	ExclusiveStartKey *Key                 `json:"ExclusiveStartKey,omitempty"`
	Limit             *int64               `json:"Limit,omitempty"`
	ScanFilter        map[string]Condition `json:"ScanFilter,omitempty"`
	TableName         string               `json:"TableName"`
}
