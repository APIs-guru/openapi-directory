package shared

type S3AccessPointConfiguration struct {
	AccessPointPolicy *string                           `json:"accessPointPolicy"`
	NetworkOrigin     *NetworkOriginConfiguration       `json:"networkOrigin"`
	PublicAccessBlock *S3PublicAccessBlockConfiguration `json:"publicAccessBlock"`
}
