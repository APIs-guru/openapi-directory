package shared

type AccountSettings struct {
	AwsAccountNumber             *string          `json:"awsAccountNumber,omitempty"`
	DefaultJobTimeoutMinutes     *int64           `json:"defaultJobTimeoutMinutes,omitempty"`
	MaxJobTimeoutMinutes         *int64           `json:"maxJobTimeoutMinutes,omitempty"`
	MaxSlots                     map[string]int64 `json:"maxSlots,omitempty"`
	SkipAppResign                *bool            `json:"skipAppResign,omitempty"`
	TrialMinutes                 *TrialMinutes    `json:"trialMinutes,omitempty"`
	UnmeteredDevices             map[string]int64 `json:"unmeteredDevices,omitempty"`
	UnmeteredRemoteAccessDevices map[string]int64 `json:"unmeteredRemoteAccessDevices,omitempty"`
}
