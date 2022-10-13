package shared

type ConnectorEntityField struct {
	Description               *string                     `json:"description"`
	DestinationProperties     *DestinationFieldProperties `json:"destinationProperties"`
	Identifier                string                      `json:"identifier"`
	Label                     *string                     `json:"label"`
	SourceProperties          *SourceFieldProperties      `json:"sourceProperties"`
	SupportedFieldTypeDetails *SupportedFieldTypeDetails  `json:"supportedFieldTypeDetails"`
}
