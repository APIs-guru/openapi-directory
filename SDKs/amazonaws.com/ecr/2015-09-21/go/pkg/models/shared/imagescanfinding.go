package shared

type ImageScanFinding struct {
	Attributes  []Attribute          `json:"attributes"`
	Description *string              `json:"description"`
	Name        *string              `json:"name"`
	Severity    *FindingSeverityEnum `json:"severity"`
	URI         *string              `json:"uri"`
}
