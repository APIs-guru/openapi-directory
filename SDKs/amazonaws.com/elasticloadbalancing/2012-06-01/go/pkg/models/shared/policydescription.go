package shared

// PolicyDescription
// Information about a policy.
type PolicyDescription struct {
	PolicyAttributeDescriptions []PolicyAttributeDescription
	PolicyName                  *string
	PolicyTypeName              *string
}
