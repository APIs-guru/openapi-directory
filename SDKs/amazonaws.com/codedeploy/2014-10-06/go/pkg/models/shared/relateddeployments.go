package shared



type RelatedDeployments struct {
    AutoUpdateOutdatedInstancesDeploymentIds []string `json:"autoUpdateOutdatedInstancesDeploymentIds,omitempty"`
    AutoUpdateOutdatedInstancesRootDeploymentID *string `json:"autoUpdateOutdatedInstancesRootDeploymentId,omitempty"`
    
}

