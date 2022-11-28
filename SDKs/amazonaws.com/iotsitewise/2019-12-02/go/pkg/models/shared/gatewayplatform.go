package shared

// GatewayPlatform
// Contains a gateway's platform information.
type GatewayPlatform struct {
	Greengrass   *Greengrass   `json:"greengrass,omitempty"`
	GreengrassV2 *GreengrassV2 `json:"greengrassV2,omitempty"`
}
