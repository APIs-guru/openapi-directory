package shared

type BatchDetectSyntaxItemResult struct {
	Index        *int64        `json:"Index"`
	SyntaxTokens []SyntaxToken `json:"SyntaxTokens"`
}
