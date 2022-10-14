package shared

type AccountQuota struct {
	AccountQuotaName *string `json:"AccountQuotaName,omitempty"`
	Max              *int64  `json:"Max,omitempty"`
	Used             *int64  `json:"Used,omitempty"`
}
