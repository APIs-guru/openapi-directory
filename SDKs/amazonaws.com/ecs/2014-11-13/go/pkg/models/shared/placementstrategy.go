package shared

// PlacementStrategy
// The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type PlacementStrategy struct {
	Field *string                    `json:"field,omitempty"`
	Type  *PlacementStrategyTypeEnum `json:"type,omitempty"`
}
