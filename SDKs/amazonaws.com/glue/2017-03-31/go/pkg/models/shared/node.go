package shared

type Node struct {
	CrawlerDetails *CrawlerNodeDetails `json:"CrawlerDetails,omitempty"`
	JobDetails     *JobNodeDetails     `json:"JobDetails,omitempty"`
	Name           *string             `json:"Name,omitempty"`
	TriggerDetails *TriggerNodeDetails `json:"TriggerDetails,omitempty"`
	Type           *NodeTypeEnum       `json:"Type,omitempty"`
	UniqueID       *string             `json:"UniqueId,omitempty"`
}
