package shared

// PolicyTypeDescription
// Information about a policy type.
type PolicyTypeDescription struct {
	Description                     *string
	PolicyAttributeTypeDescriptions []PolicyAttributeTypeDescription
	PolicyTypeName                  *string
}
