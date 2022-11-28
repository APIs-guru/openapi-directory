package shared

// TrustedKeyGroups
// A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
type TrustedKeyGroups struct {
	Enabled  bool
	Items    []string
	Quantity int64
}
