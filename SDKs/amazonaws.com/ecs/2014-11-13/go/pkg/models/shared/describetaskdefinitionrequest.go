package shared

type DescribeTaskDefinitionRequest struct {
	Include        []TaskDefinitionFieldEnum `json:"include,omitempty"`
	TaskDefinition string                    `json:"taskDefinition"`
}
