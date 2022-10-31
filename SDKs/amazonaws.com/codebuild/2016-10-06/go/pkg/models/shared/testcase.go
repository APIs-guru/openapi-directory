package shared

import (
"time")

type TestCase struct {
    DurationInNanoSeconds *int64 `json:"durationInNanoSeconds,omitempty"`
    Expired *time.Time `json:"expired,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    ReportArn *string `json:"reportArn,omitempty"`
    Status *string `json:"status,omitempty"`
    TestRawDataPath *string `json:"testRawDataPath,omitempty"`
    
}

