package shared

import (
	"time"
)

// TestGridSession
// A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
type TestGridSession struct {
	Arn                *string                    `json:"arn,omitempty"`
	BillingMinutes     *float64                   `json:"billingMinutes,omitempty"`
	Created            *time.Time                 `json:"created,omitempty"`
	Ended              *time.Time                 `json:"ended,omitempty"`
	SeleniumProperties *string                    `json:"seleniumProperties,omitempty"`
	Status             *TestGridSessionStatusEnum `json:"status,omitempty"`
}
