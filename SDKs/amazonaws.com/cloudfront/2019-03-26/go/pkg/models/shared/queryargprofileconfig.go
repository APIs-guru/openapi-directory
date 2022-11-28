package shared

// QueryArgProfileConfig
// Configuration for query argument-profile mapping for field-level encryption.
type QueryArgProfileConfig struct {
	ForwardWhenQueryArgProfileIsUnknown bool
	QueryArgProfiles                    *QueryArgProfiles
}
