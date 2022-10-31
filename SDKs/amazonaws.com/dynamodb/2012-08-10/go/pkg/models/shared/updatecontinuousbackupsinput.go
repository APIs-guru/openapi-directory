package shared



type UpdateContinuousBackupsInput struct {
    PointInTimeRecoverySpecification PointInTimeRecoverySpecification `json:"PointInTimeRecoverySpecification"`
    TableName string `json:"TableName"`
    
}

