package shared

// AccountQuota
// Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
type AccountQuota struct {
	AccountQuotaName *string `json:"AccountQuotaName,omitempty"`
	Max              *int64  `json:"Max,omitempty"`
	Used             *int64  `json:"Used,omitempty"`
}
