import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { ServiceStatusEnum } from "./servicestatusenum";
/**
 * <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
**/
export declare class Service extends SpeakeasyBase {
    autoScalingConfigurationSummary: AutoScalingConfigurationSummary;
    createdAt: Date;
    deletedAt?: Date;
    encryptionConfiguration?: EncryptionConfiguration;
    healthCheckConfiguration?: HealthCheckConfiguration;
    instanceConfiguration: InstanceConfiguration;
    serviceArn: string;
    serviceId: string;
    serviceName: string;
    serviceUrl: string;
    sourceConfiguration: SourceConfiguration;
    status: ServiceStatusEnum;
    updatedAt: Date;
}
