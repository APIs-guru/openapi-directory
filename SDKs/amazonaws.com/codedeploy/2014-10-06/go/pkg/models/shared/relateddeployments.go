package shared

type RelatedDeployments struct {
	AutoUpdateOutdatedInstancesDeploymentIds    []string `json:"autoUpdateOutdatedInstancesDeploymentIds"`
	AutoUpdateOutdatedInstancesRootDeploymentID *string  `json:"autoUpdateOutdatedInstancesRootDeploymentId"`
}
