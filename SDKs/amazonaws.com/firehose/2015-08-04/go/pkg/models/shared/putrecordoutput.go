package shared

type PutRecordOutput struct {
	Encrypted *bool  `json:"Encrypted"`
	RecordID  string `json:"RecordId"`
}
