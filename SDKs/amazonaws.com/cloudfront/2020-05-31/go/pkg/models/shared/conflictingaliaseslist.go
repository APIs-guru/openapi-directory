package shared

// ConflictingAliasesList
// A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
type ConflictingAliasesList struct {
	Items      []ConflictingAlias
	MaxItems   *int64
	NextMarker *string
	Quantity   *int64
}
