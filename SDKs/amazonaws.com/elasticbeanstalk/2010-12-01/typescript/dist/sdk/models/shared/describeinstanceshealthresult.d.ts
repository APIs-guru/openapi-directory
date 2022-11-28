import { SpeakeasyBase } from "../../../internal/utils";
import { SingleInstanceHealth } from "./singleinstancehealth";
/**
 * Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
**/
export declare class DescribeInstancesHealthResult extends SpeakeasyBase {
    instanceHealthList?: SingleInstanceHealth[];
    nextToken?: string;
    refreshedAt?: Date;
}
