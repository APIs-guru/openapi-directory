package shared

// ActiveTrustedKeyGroups
// A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type ActiveTrustedKeyGroups struct {
	Enabled  bool
	Items    []KgKeyPairIds
	Quantity int64
}
