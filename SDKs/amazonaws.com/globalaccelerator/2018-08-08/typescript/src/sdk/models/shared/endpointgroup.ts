import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointDescription } from "./endpointdescription";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";


// EndpointGroup
/** 
 * A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
**/
export class EndpointGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointDescriptions", elemType: shared.EndpointDescription })
  endpointDescriptions?: EndpointDescription[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;

  @Metadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion?: string;

  @Metadata({ data: "json, name=HealthCheckIntervalSeconds" })
  healthCheckIntervalSeconds?: number;

  @Metadata({ data: "json, name=HealthCheckPath" })
  healthCheckPath?: string;

  @Metadata({ data: "json, name=HealthCheckPort" })
  healthCheckPort?: number;

  @Metadata({ data: "json, name=HealthCheckProtocol" })
  healthCheckProtocol?: HealthCheckProtocolEnum;

  @Metadata({ data: "json, name=PortOverrides", elemType: shared.PortOverride })
  portOverrides?: PortOverride[];

  @Metadata({ data: "json, name=ThresholdCount" })
  thresholdCount?: number;

  @Metadata({ data: "json, name=TrafficDialPercentage" })
  trafficDialPercentage?: number;
}
