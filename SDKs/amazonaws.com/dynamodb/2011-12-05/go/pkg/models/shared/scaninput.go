package shared

type ScanInput struct {
	AttributesToGet   []string             `json:"AttributesToGet"`
	Count             *bool                `json:"Count"`
	ExclusiveStartKey *Key                 `json:"ExclusiveStartKey"`
	Limit             *int64               `json:"Limit"`
	ScanFilter        map[string]Condition `json:"ScanFilter"`
	TableName         string               `json:"TableName"`
}
