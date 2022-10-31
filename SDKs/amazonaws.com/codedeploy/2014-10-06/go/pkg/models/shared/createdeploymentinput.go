package shared

type CreateDeploymentInput struct {
	ApplicationName               string                     `json:"applicationName"`
	AutoRollbackConfiguration     *AutoRollbackConfiguration `json:"autoRollbackConfiguration,omitempty"`
	DeploymentConfigName          *string                    `json:"deploymentConfigName,omitempty"`
	DeploymentGroupName           *string                    `json:"deploymentGroupName,omitempty"`
	Description                   *string                    `json:"description,omitempty"`
	FileExistsBehavior            *FileExistsBehaviorEnum    `json:"fileExistsBehavior,omitempty"`
	IgnoreApplicationStopFailures *bool                      `json:"ignoreApplicationStopFailures,omitempty"`
	Revision                      *RevisionLocation          `json:"revision,omitempty"`
	TargetInstances               *TargetInstances           `json:"targetInstances,omitempty"`
	UpdateOutdatedInstancesOnly   *bool                      `json:"updateOutdatedInstancesOnly,omitempty"`
}
