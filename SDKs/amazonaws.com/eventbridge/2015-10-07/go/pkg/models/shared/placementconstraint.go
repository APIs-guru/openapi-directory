package shared

// PlacementConstraint
// An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.
type PlacementConstraint struct {
	Expression *string                      `json:"expression,omitempty"`
	Type       *PlacementConstraintTypeEnum `json:"type,omitempty"`
}
