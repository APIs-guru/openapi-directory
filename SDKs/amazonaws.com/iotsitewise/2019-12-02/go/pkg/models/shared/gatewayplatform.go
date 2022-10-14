package shared

type GatewayPlatform struct {
	Greengrass   *Greengrass   `json:"greengrass,omitempty"`
	GreengrassV2 *GreengrassV2 `json:"greengrassV2,omitempty"`
}
