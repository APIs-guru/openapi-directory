package shared

type ExecutionConfiguration struct {
	AccountsCleanup    *bool  `json:"accountsCleanup"`
	AppPackagesCleanup *bool  `json:"appPackagesCleanup"`
	JobTimeoutMinutes  *int64 `json:"jobTimeoutMinutes"`
	SkipAppResign      *bool  `json:"skipAppResign"`
	VideoCapture       *bool  `json:"videoCapture"`
}
