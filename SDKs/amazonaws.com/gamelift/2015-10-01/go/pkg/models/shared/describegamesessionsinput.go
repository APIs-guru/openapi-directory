package shared

// DescribeGameSessionsInput
// Represents the input for a request operation.
type DescribeGameSessionsInput struct {
	AliasID       *string `json:"AliasId,omitempty"`
	FleetID       *string `json:"FleetId,omitempty"`
	GameSessionID *string `json:"GameSessionId,omitempty"`
	Limit         *int64  `json:"Limit,omitempty"`
	Location      *string `json:"Location,omitempty"`
	NextToken     *string `json:"NextToken,omitempty"`
	StatusFilter  *string `json:"StatusFilter,omitempty"`
}
