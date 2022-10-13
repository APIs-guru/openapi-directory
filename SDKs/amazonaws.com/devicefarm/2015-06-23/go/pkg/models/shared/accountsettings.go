package shared

type AccountSettings struct {
	AwsAccountNumber             *string          `json:"awsAccountNumber"`
	DefaultJobTimeoutMinutes     *int64           `json:"defaultJobTimeoutMinutes"`
	MaxJobTimeoutMinutes         *int64           `json:"maxJobTimeoutMinutes"`
	MaxSlots                     map[string]int64 `json:"maxSlots"`
	SkipAppResign                *bool            `json:"skipAppResign"`
	TrialMinutes                 *TrialMinutes    `json:"trialMinutes"`
	UnmeteredDevices             map[string]int64 `json:"unmeteredDevices"`
	UnmeteredRemoteAccessDevices map[string]int64 `json:"unmeteredRemoteAccessDevices"`
}
