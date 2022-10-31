package shared

type ListInstalledComponentsResponse struct {
	InstalledComponents []InstalledComponent `json:"installedComponents,omitempty"`
	NextToken           *string              `json:"nextToken,omitempty"`
}
