import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";



export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfiguration" })
  healthCheckConfiguration?: HealthCheckConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceConfiguration" })
  sourceConfiguration?: SourceConfiguration;
}
