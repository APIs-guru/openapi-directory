package shared

type BatchDetectSyntaxItemResult struct {
	Index        *int64        `json:"Index,omitempty"`
	SyntaxTokens []SyntaxToken `json:"SyntaxTokens,omitempty"`
}
