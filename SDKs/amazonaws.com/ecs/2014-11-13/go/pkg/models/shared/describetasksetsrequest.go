package shared



type DescribeTaskSetsRequest struct {
    Cluster string `json:"cluster"`
    Include []TaskSetFieldEnum `json:"include,omitempty"`
    Service string `json:"service"`
    TaskSets []string `json:"taskSets,omitempty"`
    
}

