package shared

// StreamingDistributionConfig
// The RTMP distribution's configuration information.
type StreamingDistributionConfig struct {
	Aliases         *Aliases
	CallerReference string
	Comment         string
	Enabled         bool
	Logging         *StreamingLoggingConfig
	PriceClass      *PriceClassEnum
	S3Origin        S3Origin
	TrustedSigners  TrustedSigners
}
