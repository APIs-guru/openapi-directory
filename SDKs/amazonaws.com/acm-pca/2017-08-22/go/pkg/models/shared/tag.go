package shared

// Tag
// Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
