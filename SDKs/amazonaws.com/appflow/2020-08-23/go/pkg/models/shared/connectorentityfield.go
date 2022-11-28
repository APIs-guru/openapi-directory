package shared

// ConnectorEntityField
//
//	Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on.
type ConnectorEntityField struct {
	Description               *string                     `json:"description,omitempty"`
	DestinationProperties     *DestinationFieldProperties `json:"destinationProperties,omitempty"`
	Identifier                string                      `json:"identifier"`
	Label                     *string                     `json:"label,omitempty"`
	SourceProperties          *SourceFieldProperties      `json:"sourceProperties,omitempty"`
	SupportedFieldTypeDetails *SupportedFieldTypeDetails  `json:"supportedFieldTypeDetails,omitempty"`
}
