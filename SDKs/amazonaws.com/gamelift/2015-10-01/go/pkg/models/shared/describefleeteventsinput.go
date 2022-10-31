package shared

import (
"time")

type DescribeFleetEventsInput struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    FleetID string `json:"FleetId"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

