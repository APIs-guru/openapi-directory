import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { ServiceStatusEnum } from "./servicestatusenum";



// Service
/** 
 * <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationSummary" })
  autoScalingConfigurationSummary: AutoScalingConfigurationSummary;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=DeletedAt" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfiguration" })
  healthCheckConfiguration?: HealthCheckConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceConfiguration" })
  instanceConfiguration: InstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceUrl" })
  serviceUrl: string;

  @SpeakeasyMetadata({ data: "json, name=SourceConfiguration" })
  sourceConfiguration: SourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ServiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt: Date;
}
