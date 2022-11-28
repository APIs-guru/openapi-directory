package shared

// ActiveTrustedSigners
// A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type ActiveTrustedSigners struct {
	Enabled  bool
	Items    []Signer
	Quantity int64
}
