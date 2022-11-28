package shared

// ResourceRecord
// Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.
type ResourceRecord struct {
	Name  string         `json:"Name"`
	Type  RecordTypeEnum `json:"Type"`
	Value string         `json:"Value"`
}
