package shared

// PlacementStrategy
// The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.
type PlacementStrategy struct {
	Field *string                    `json:"field,omitempty"`
	Type  *PlacementStrategyTypeEnum `json:"type,omitempty"`
}
