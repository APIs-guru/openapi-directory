package shared

import (
	"time"
)

type DescribeFleetEventsInput struct {
	EndTime   *time.Time `json:"EndTime"`
	FleetID   string     `json:"FleetId"`
	Limit     *int64     `json:"Limit"`
	NextToken *string    `json:"NextToken"`
	StartTime *time.Time `json:"StartTime"`
}
