package shared

import (
	"time"
)

type TestGridSession struct {
	Arn                *string                    `json:"arn,omitempty"`
	BillingMinutes     *float64                   `json:"billingMinutes,omitempty"`
	Created            *time.Time                 `json:"created,omitempty"`
	Ended              *time.Time                 `json:"ended,omitempty"`
	SeleniumProperties *string                    `json:"seleniumProperties,omitempty"`
	Status             *TestGridSessionStatusEnum `json:"status,omitempty"`
}
