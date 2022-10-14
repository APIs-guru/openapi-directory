package shared

import (
	"time"
)

type GetMatchesResponse struct {
	MatchGenerationDate *time.Time  `json:"MatchGenerationDate,omitempty"`
	Matches             []MatchItem `json:"Matches,omitempty"`
	NextToken           *string     `json:"NextToken,omitempty"`
	PotentialMatches    *int64      `json:"PotentialMatches,omitempty"`
}
