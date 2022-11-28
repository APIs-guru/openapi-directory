import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { Tag } from "./tag";



export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfiguration" })
  healthCheckConfiguration?: HealthCheckConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=SourceConfiguration" })
  sourceConfiguration: SourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
