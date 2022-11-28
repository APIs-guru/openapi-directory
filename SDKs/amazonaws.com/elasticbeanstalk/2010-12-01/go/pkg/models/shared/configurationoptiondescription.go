package shared

// ConfigurationOptionDescription
// Describes the possible values for a configuration option.
type ConfigurationOptionDescription struct {
	ChangeSeverity *string
	DefaultValue   *string
	MaxLength      *int64
	MaxValue       *int64
	MinValue       *int64
	Name           *string
	Namespace      *string
	Regex          *OptionRestrictionRegex
	UserDefined    *bool
	ValueOptions   []string
	ValueType      *ConfigurationOptionValueTypeEnum
}
