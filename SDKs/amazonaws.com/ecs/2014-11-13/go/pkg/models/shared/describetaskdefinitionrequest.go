package shared

type DescribeTaskDefinitionRequest struct {
	Include        []TaskDefinitionFieldEnum `json:"include"`
	TaskDefinition string                    `json:"taskDefinition"`
}
