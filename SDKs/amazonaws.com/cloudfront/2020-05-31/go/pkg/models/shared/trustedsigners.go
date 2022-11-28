package shared

// TrustedSigners
// A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
type TrustedSigners struct {
	Enabled  bool
	Items    []string
	Quantity int64
}
