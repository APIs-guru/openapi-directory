package shared

type RoleMapping struct {
	AmbiguousRoleResolution *AmbiguousRoleResolutionTypeEnum `json:"AmbiguousRoleResolution"`
	RulesConfiguration      *RulesConfigurationType          `json:"RulesConfiguration"`
	Type                    RoleMappingTypeEnum              `json:"Type"`
}
