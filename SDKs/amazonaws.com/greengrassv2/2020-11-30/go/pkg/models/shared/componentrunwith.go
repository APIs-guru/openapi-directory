package shared

// ComponentRunWith
// Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
type ComponentRunWith struct {
	PosixUser            *string               `json:"posixUser,omitempty"`
	SystemResourceLimits *SystemResourceLimits `json:"systemResourceLimits,omitempty"`
}
