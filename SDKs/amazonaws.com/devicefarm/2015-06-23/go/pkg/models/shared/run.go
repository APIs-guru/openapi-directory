package shared

import (
	"time"
)

// Run
// Represents a test run on a set of devices with a given app package, test parameters, and so on.
type Run struct {
	AppUpload             *string                  `json:"appUpload,omitempty"`
	Arn                   *string                  `json:"arn,omitempty"`
	BillingMethod         *BillingMethodEnum       `json:"billingMethod,omitempty"`
	CompletedJobs         *int64                   `json:"completedJobs,omitempty"`
	Counters              *Counters                `json:"counters,omitempty"`
	Created               *time.Time               `json:"created,omitempty"`
	CustomerArtifactPaths *CustomerArtifactPaths   `json:"customerArtifactPaths,omitempty"`
	DeviceMinutes         *DeviceMinutes           `json:"deviceMinutes,omitempty"`
	DevicePoolArn         *string                  `json:"devicePoolArn,omitempty"`
	DeviceSelectionResult *DeviceSelectionResult   `json:"deviceSelectionResult,omitempty"`
	EventCount            *int64                   `json:"eventCount,omitempty"`
	JobTimeoutMinutes     *int64                   `json:"jobTimeoutMinutes,omitempty"`
	Locale                *string                  `json:"locale,omitempty"`
	Location              *Location                `json:"location,omitempty"`
	Message               *string                  `json:"message,omitempty"`
	Name                  *string                  `json:"name,omitempty"`
	NetworkProfile        *NetworkProfile          `json:"networkProfile,omitempty"`
	ParsingResultURL      *string                  `json:"parsingResultUrl,omitempty"`
	Platform              *DevicePlatformEnum      `json:"platform,omitempty"`
	Radios                *Radios                  `json:"radios,omitempty"`
	Result                *ExecutionResultEnum     `json:"result,omitempty"`
	ResultCode            *ExecutionResultCodeEnum `json:"resultCode,omitempty"`
	Seed                  *int64                   `json:"seed,omitempty"`
	SkipAppResign         *bool                    `json:"skipAppResign,omitempty"`
	Started               *time.Time               `json:"started,omitempty"`
	Status                *ExecutionStatusEnum     `json:"status,omitempty"`
	Stopped               *time.Time               `json:"stopped,omitempty"`
	TestSpecArn           *string                  `json:"testSpecArn,omitempty"`
	TotalJobs             *int64                   `json:"totalJobs,omitempty"`
	Type                  *TestTypeEnum            `json:"type,omitempty"`
	WebURL                *string                  `json:"webUrl,omitempty"`
}
