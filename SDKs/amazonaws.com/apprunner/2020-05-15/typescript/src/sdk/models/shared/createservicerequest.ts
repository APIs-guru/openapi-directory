import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { Tag } from "./tag";


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn?: string;

  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=HealthCheckConfiguration" })
  healthCheckConfiguration?: HealthCheckConfiguration;

  @Metadata({ data: "json, name=InstanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName: string;

  @Metadata({ data: "json, name=SourceConfiguration" })
  sourceConfiguration: SourceConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
