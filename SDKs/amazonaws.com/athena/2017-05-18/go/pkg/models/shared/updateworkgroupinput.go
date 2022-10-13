package shared

type UpdateWorkGroupInput struct {
	ConfigurationUpdates *WorkGroupConfigurationUpdates `json:"ConfigurationUpdates"`
	Description          *string                        `json:"Description"`
	State                *WorkGroupStateEnum            `json:"State"`
	WorkGroup            string                         `json:"WorkGroup"`
}
