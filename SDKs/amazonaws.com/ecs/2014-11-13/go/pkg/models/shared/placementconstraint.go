package shared



type PlacementConstraint struct {
    Expression *string `json:"expression,omitempty"`
    Type *PlacementConstraintTypeEnum `json:"type,omitempty"`
    
}

