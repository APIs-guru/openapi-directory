package shared

type Payload struct {
	ContentExpression string          `json:"contentExpression"`
	Type              PayloadTypeEnum `json:"type"`
}
