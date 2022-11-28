import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointDescription } from "./endpointdescription";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";



// EndpointGroup
/** 
 * A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
**/
export class EndpointGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointDescriptions", elemType: EndpointDescription })
  endpointDescriptions?: EndpointDescription[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;

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
