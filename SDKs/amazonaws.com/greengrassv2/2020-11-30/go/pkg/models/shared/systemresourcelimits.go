package shared

// SystemResourceLimits
// Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.
type SystemResourceLimits struct {
	Cpus   *float64 `json:"cpus,omitempty"`
	Memory *int64   `json:"memory,omitempty"`
}
