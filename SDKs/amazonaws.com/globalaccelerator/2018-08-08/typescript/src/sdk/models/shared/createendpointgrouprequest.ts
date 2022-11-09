import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointConfiguration } from "./endpointconfiguration";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";
import { PortOverride } from "./portoverride";


export class CreateEndpointGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigurations", elemType: shared.EndpointConfiguration })
  endpointConfigurations?: EndpointConfiguration[];

  @Metadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion: string;

  @Metadata({ data: "json, name=HealthCheckIntervalSeconds" })
  healthCheckIntervalSeconds?: number;

  @Metadata({ data: "json, name=HealthCheckPath" })
  healthCheckPath?: string;

  @Metadata({ data: "json, name=HealthCheckPort" })
  healthCheckPort?: number;

  @Metadata({ data: "json, name=HealthCheckProtocol" })
  healthCheckProtocol?: HealthCheckProtocolEnum;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;

  @Metadata({ data: "json, name=PortOverrides", elemType: shared.PortOverride })
  portOverrides?: PortOverride[];

  @Metadata({ data: "json, name=ThresholdCount" })
  thresholdCount?: number;

  @Metadata({ data: "json, name=TrafficDialPercentage" })
  trafficDialPercentage?: number;
}
