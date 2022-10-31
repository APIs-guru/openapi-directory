package shared



type ImageScanFinding struct {
    Attributes []Attribute `json:"attributes,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Severity *FindingSeverityEnum `json:"severity,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

