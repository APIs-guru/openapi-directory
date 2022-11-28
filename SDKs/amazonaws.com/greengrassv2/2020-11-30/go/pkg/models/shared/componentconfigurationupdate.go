package shared

// ComponentConfigurationUpdate
// Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
type ComponentConfigurationUpdate struct {
	Merge *string  `json:"merge,omitempty"`
	Reset []string `json:"reset,omitempty"`
}
