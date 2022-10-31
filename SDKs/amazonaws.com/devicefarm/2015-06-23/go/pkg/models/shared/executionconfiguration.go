package shared

type ExecutionConfiguration struct {
	AccountsCleanup    *bool  `json:"accountsCleanup,omitempty"`
	AppPackagesCleanup *bool  `json:"appPackagesCleanup,omitempty"`
	JobTimeoutMinutes  *int64 `json:"jobTimeoutMinutes,omitempty"`
	SkipAppResign      *bool  `json:"skipAppResign,omitempty"`
	VideoCapture       *bool  `json:"videoCapture,omitempty"`
}
