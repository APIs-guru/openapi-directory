package shared

import (
	"time"
)

type Run struct {
	AppUpload             *string                  `json:"appUpload"`
	Arn                   *string                  `json:"arn"`
	BillingMethod         *BillingMethodEnum       `json:"billingMethod"`
	CompletedJobs         *int64                   `json:"completedJobs"`
	Counters              *Counters                `json:"counters"`
	Created               *time.Time               `json:"created"`
	CustomerArtifactPaths *CustomerArtifactPaths   `json:"customerArtifactPaths"`
	DeviceMinutes         *DeviceMinutes           `json:"deviceMinutes"`
	DevicePoolArn         *string                  `json:"devicePoolArn"`
	DeviceSelectionResult *DeviceSelectionResult   `json:"deviceSelectionResult"`
	EventCount            *int64                   `json:"eventCount"`
	JobTimeoutMinutes     *int64                   `json:"jobTimeoutMinutes"`
	Locale                *string                  `json:"locale"`
	Location              *Location                `json:"location"`
	Message               *string                  `json:"message"`
	Name                  *string                  `json:"name"`
	NetworkProfile        *NetworkProfile          `json:"networkProfile"`
	ParsingResultURL      *string                  `json:"parsingResultUrl"`
	Platform              *DevicePlatformEnum      `json:"platform"`
	Radios                *Radios                  `json:"radios"`
	Result                *ExecutionResultEnum     `json:"result"`
	ResultCode            *ExecutionResultCodeEnum `json:"resultCode"`
	Seed                  *int64                   `json:"seed"`
	SkipAppResign         *bool                    `json:"skipAppResign"`
	Started               *time.Time               `json:"started"`
	Status                *ExecutionStatusEnum     `json:"status"`
	Stopped               *time.Time               `json:"stopped"`
	TestSpecArn           *string                  `json:"testSpecArn"`
	TotalJobs             *int64                   `json:"totalJobs"`
	Type                  *TestTypeEnum            `json:"type"`
	WebURL                *string                  `json:"webUrl"`
}
