package shared

// GreengrassV2
// Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>.
type GreengrassV2 struct {
	CoreDeviceThingName string `json:"coreDeviceThingName"`
}
