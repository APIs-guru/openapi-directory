package shared

type PlacementConstraint struct {
	Expression *string                      `json:"expression"`
	Type       *PlacementConstraintTypeEnum `json:"type"`
}
