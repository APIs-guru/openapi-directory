package shared

type BatchExecuteStatementInput struct {
	Statements []BatchStatementRequest `json:"Statements"`
}
