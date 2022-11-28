package shared

// DistributionConfig
// A distribution configuration.
type DistributionConfig struct {
	Aliases              *Aliases
	CacheBehaviors       *CacheBehaviors
	CallerReference      string
	Comment              string
	CustomErrorResponses *CustomErrorResponses
	DefaultCacheBehavior DefaultCacheBehavior
	DefaultRootObject    *string
	Enabled              bool
	HTTPVersion          *HTTPVersionEnum
	IsIpv6Enabled        *bool
	Logging              *LoggingConfig
	OriginGroups         *OriginGroups
	Origins              Origins
	PriceClass           *PriceClassEnum
	Restrictions         *Restrictions
	ViewerCertificate    *ViewerCertificate
	WebACLID             *string
}
