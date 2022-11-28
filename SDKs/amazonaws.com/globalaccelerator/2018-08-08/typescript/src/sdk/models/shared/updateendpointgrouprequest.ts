import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfiguration } from "./endpointconfiguration";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";



export class UpdateEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigurations", elemType: EndpointConfiguration })
  endpointConfigurations?: EndpointConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckIntervalSeconds" })
  healthCheckIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckPath" })
  healthCheckPath?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckPort" })
  healthCheckPort?: number;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckProtocol" })
  healthCheckProtocol?: HealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=PortOverrides", elemType: PortOverride })
  portOverrides?: PortOverride[];

  @SpeakeasyMetadata({ data: "json, name=ThresholdCount" })
  thresholdCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TrafficDialPercentage" })
  trafficDialPercentage?: number;
}
