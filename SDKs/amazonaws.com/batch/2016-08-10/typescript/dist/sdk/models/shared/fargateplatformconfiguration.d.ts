import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
**/
export declare class FargatePlatformConfiguration extends SpeakeasyBase {
    platformVersion?: string;
}
