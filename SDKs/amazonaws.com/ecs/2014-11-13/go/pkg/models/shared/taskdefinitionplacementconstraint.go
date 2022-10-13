package shared

type TaskDefinitionPlacementConstraint struct {
	Expression *string                                    `json:"expression"`
	Type       *TaskDefinitionPlacementConstraintTypeEnum `json:"type"`
}
