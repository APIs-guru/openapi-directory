package shared

type AccountQuota struct {
	AccountQuotaName *string `json:"AccountQuotaName"`
	Max              *int64  `json:"Max"`
	Used             *int64  `json:"Used"`
}
