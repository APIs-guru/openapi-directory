package shared

// IssueDetected
// Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
type IssueDetected struct {
	CharacterOffsets CharacterOffsets `json:"CharacterOffsets"`
}
