package shared

// VariableValue
// Identifies a property value used in an expression.
type VariableValue struct {
	HierarchyID *string `json:"hierarchyId,omitempty"`
	PropertyID  string  `json:"propertyId"`
}
