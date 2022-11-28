package shared

// CloudFrontOriginAccessIdentityAlreadyExists
// If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.
type CloudFrontOriginAccessIdentityAlreadyExists struct {
	Message *string
}
