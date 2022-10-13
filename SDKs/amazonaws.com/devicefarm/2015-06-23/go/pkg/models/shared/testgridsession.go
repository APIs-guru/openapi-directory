package shared

import (
	"time"
)

type TestGridSession struct {
	Arn                *string                    `json:"arn"`
	BillingMinutes     *float64                   `json:"billingMinutes"`
	Created            *time.Time                 `json:"created"`
	Ended              *time.Time                 `json:"ended"`
	SeleniumProperties *string                    `json:"seleniumProperties"`
	Status             *TestGridSessionStatusEnum `json:"status"`
}
