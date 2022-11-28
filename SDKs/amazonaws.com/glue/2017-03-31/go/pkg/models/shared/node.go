package shared

// Node
// A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
type Node struct {
	CrawlerDetails *CrawlerNodeDetails `json:"CrawlerDetails,omitempty"`
	JobDetails     *JobNodeDetails     `json:"JobDetails,omitempty"`
	Name           *string             `json:"Name,omitempty"`
	TriggerDetails *TriggerNodeDetails `json:"TriggerDetails,omitempty"`
	Type           *NodeTypeEnum       `json:"Type,omitempty"`
	UniqueID       *string             `json:"UniqueId,omitempty"`
}
