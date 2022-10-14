package shared

type S3AccessPointConfiguration struct {
	AccessPointPolicy *string                           `json:"accessPointPolicy,omitempty"`
	NetworkOrigin     *NetworkOriginConfiguration       `json:"networkOrigin,omitempty"`
	PublicAccessBlock *S3PublicAccessBlockConfiguration `json:"publicAccessBlock,omitempty"`
}
