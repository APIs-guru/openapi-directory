import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMetrics } from "./applicationmetrics";
import { InstanceHealthSummary } from "./instancehealthsummary";
import { EnvironmentHealthEnum } from "./environmenthealthenum";
/**
 * Health details for an AWS Elastic Beanstalk environment.
**/
export declare class DescribeEnvironmentHealthResult extends SpeakeasyBase {
    applicationMetrics?: ApplicationMetrics;
    causes?: string[];
    color?: string;
    environmentName?: string;
    healthStatus?: string;
    instancesHealth?: InstanceHealthSummary;
    refreshedAt?: Date;
    status?: EnvironmentHealthEnum;
}
