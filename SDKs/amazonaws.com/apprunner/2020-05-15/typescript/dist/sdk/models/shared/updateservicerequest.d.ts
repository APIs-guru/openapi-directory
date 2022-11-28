import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
export declare class UpdateServiceRequest extends SpeakeasyBase {
    autoScalingConfigurationArn?: string;
    healthCheckConfiguration?: HealthCheckConfiguration;
    instanceConfiguration?: InstanceConfiguration;
    serviceArn: string;
    sourceConfiguration?: SourceConfiguration;
}
