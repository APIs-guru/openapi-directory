package shared

// ResultConfiguration
// The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
type ResultConfiguration struct {
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	OutputLocation          *string                  `json:"OutputLocation,omitempty"`
}
