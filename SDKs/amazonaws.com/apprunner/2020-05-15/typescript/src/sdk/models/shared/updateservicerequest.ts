import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn?: string;

  @Metadata({ data: "json, name=HealthCheckConfiguration" })
  healthCheckConfiguration?: HealthCheckConfiguration;

  @Metadata({ data: "json, name=InstanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;

  @Metadata({ data: "json, name=SourceConfiguration" })
  sourceConfiguration?: SourceConfiguration;
}
