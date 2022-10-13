package shared

type CreateDeploymentInput struct {
	ApplicationName               string                     `json:"applicationName"`
	AutoRollbackConfiguration     *AutoRollbackConfiguration `json:"autoRollbackConfiguration"`
	DeploymentConfigName          *string                    `json:"deploymentConfigName"`
	DeploymentGroupName           *string                    `json:"deploymentGroupName"`
	Description                   *string                    `json:"description"`
	FileExistsBehavior            *FileExistsBehaviorEnum    `json:"fileExistsBehavior"`
	IgnoreApplicationStopFailures *bool                      `json:"ignoreApplicationStopFailures"`
	Revision                      *RevisionLocation          `json:"revision"`
	TargetInstances               *TargetInstances           `json:"targetInstances"`
	UpdateOutdatedInstancesOnly   *bool                      `json:"updateOutdatedInstancesOnly"`
}
