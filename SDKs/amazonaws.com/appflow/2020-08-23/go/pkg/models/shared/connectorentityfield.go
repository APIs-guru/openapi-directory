package shared



type ConnectorEntityField struct {
    Description *string `json:"description,omitempty"`
    DestinationProperties *DestinationFieldProperties `json:"destinationProperties,omitempty"`
    Identifier string `json:"identifier"`
    Label *string `json:"label,omitempty"`
    SourceProperties *SourceFieldProperties `json:"sourceProperties,omitempty"`
    SupportedFieldTypeDetails *SupportedFieldTypeDetails `json:"supportedFieldTypeDetails,omitempty"`
    
}

