package shared

type ListInstalledComponentsResponse struct {
	InstalledComponents []InstalledComponent `json:"installedComponents"`
	NextToken           *string              `json:"nextToken"`
}
