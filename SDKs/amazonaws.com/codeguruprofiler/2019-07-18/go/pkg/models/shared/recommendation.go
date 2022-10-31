package shared

import (
"time")

type Recommendation struct {
    AllMatchesCount int64 `json:"allMatchesCount"`
    AllMatchesSum float64 `json:"allMatchesSum"`
    EndTime time.Time `json:"endTime"`
    Pattern Pattern `json:"pattern"`
    StartTime time.Time `json:"startTime"`
    TopMatches []Match `json:"topMatches"`
    
}

