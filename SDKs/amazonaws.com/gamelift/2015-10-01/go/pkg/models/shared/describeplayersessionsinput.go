package shared

// DescribePlayerSessionsInput
// Represents the input for a request operation.
type DescribePlayerSessionsInput struct {
	GameSessionID             *string `json:"GameSessionId,omitempty"`
	Limit                     *int64  `json:"Limit,omitempty"`
	NextToken                 *string `json:"NextToken,omitempty"`
	PlayerID                  *string `json:"PlayerId,omitempty"`
	PlayerSessionID           *string `json:"PlayerSessionId,omitempty"`
	PlayerSessionStatusFilter *string `json:"PlayerSessionStatusFilter,omitempty"`
}
