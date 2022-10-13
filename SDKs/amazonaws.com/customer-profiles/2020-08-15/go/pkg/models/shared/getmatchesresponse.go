package shared

import (
	"time"
)

type GetMatchesResponse struct {
	MatchGenerationDate *time.Time  `json:"MatchGenerationDate"`
	Matches             []MatchItem `json:"Matches"`
	NextToken           *string     `json:"NextToken"`
	PotentialMatches    *int64      `json:"PotentialMatches"`
}
