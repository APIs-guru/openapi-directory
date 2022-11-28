package shared

// RoleMapping
// A role mapping.
type RoleMapping struct {
	AmbiguousRoleResolution *AmbiguousRoleResolutionTypeEnum `json:"AmbiguousRoleResolution,omitempty"`
	RulesConfiguration      *RulesConfigurationType          `json:"RulesConfiguration,omitempty"`
	Type                    RoleMappingTypeEnum              `json:"Type"`
}
