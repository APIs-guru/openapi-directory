package shared

// GeoRestriction
// A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
type GeoRestriction struct {
	Items           []string
	Quantity        int64
	RestrictionType GeoRestrictionTypeEnum
}
