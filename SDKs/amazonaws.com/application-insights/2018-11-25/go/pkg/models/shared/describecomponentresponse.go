package shared

type DescribeComponentResponse struct {
	ApplicationComponent *ApplicationComponent `json:"ApplicationComponent,omitempty"`
	ResourceList         []string              `json:"ResourceList,omitempty"`
}
