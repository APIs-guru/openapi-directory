package shared

// TaskDefinitionPlacementConstraint
// <p>An object representing a constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints are not supported for tasks run on Fargate.</p> </note>
type TaskDefinitionPlacementConstraint struct {
	Expression *string                                    `json:"expression,omitempty"`
	Type       *TaskDefinitionPlacementConstraintTypeEnum `json:"type,omitempty"`
}
