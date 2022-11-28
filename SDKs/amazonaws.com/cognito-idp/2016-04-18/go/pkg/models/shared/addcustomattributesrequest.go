package shared

// AddCustomAttributesRequest
// Represents the request to add custom attributes.
type AddCustomAttributesRequest struct {
	CustomAttributes []SchemaAttributeType `json:"CustomAttributes"`
	UserPoolID       string                `json:"UserPoolId"`
}
