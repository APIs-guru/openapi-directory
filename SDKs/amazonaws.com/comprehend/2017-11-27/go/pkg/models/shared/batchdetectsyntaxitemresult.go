package shared

// BatchDetectSyntaxItemResult
// The result of calling the operation. The operation returns one object that is successfully processed by the operation.
type BatchDetectSyntaxItemResult struct {
	Index        *int64        `json:"Index,omitempty"`
	SyntaxTokens []SyntaxToken `json:"SyntaxTokens,omitempty"`
}
