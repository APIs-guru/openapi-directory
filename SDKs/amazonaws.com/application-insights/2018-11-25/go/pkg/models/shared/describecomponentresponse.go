package shared

type DescribeComponentResponse struct {
	ApplicationComponent *ApplicationComponent `json:"ApplicationComponent"`
	ResourceList         []string              `json:"ResourceList"`
}
