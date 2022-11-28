package shared

// RelatedDeployments
// Information about deployments related to the specified deployment.
type RelatedDeployments struct {
	AutoUpdateOutdatedInstancesDeploymentIds    []string `json:"autoUpdateOutdatedInstancesDeploymentIds,omitempty"`
	AutoUpdateOutdatedInstancesRootDeploymentID *string  `json:"autoUpdateOutdatedInstancesRootDeploymentId,omitempty"`
}
