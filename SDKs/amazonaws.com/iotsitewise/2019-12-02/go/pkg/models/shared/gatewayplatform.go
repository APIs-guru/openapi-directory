package shared

type GatewayPlatform struct {
	Greengrass   *Greengrass   `json:"greengrass"`
	GreengrassV2 *GreengrassV2 `json:"greengrassV2"`
}
