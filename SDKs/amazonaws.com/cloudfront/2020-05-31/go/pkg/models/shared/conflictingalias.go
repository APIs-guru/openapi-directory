package shared

// ConflictingAlias
// An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it’s associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
type ConflictingAlias struct {
	AccountID      *string
	Alias          *string
	DistributionID *string
}
