package shared

type Node struct {
	CrawlerDetails *CrawlerNodeDetails `json:"CrawlerDetails"`
	JobDetails     *JobNodeDetails     `json:"JobDetails"`
	Name           *string             `json:"Name"`
	TriggerDetails *TriggerNodeDetails `json:"TriggerDetails"`
	Type           *NodeTypeEnum       `json:"Type"`
	UniqueID       *string             `json:"UniqueId"`
}
