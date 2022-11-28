import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMetrics } from "./applicationmetrics";
import { Deployment } from "./deployment";
import { SystemStatus } from "./systemstatus";
/**
 * Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
**/
export declare class SingleInstanceHealth extends SpeakeasyBase {
    applicationMetrics?: ApplicationMetrics;
    availabilityZone?: string;
    causes?: string[];
    color?: string;
    deployment?: Deployment;
    healthStatus?: string;
    instanceId?: string;
    instanceType?: string;
    launchedAt?: Date;
    system?: SystemStatus;
}
