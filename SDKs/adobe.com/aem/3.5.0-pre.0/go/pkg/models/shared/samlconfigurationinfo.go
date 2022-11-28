package shared

type SamlConfigurationInfo struct {
	BundleLocation  *string
	Description     *string
	Pid             *string
	Properties      *SamlConfigurationProperties
	ServiceLocation *string
	Title           *string
}
