import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.
**/
export declare class VpcConfig extends SpeakeasyBase {
    securityGroupIds: string[];
    subnets: string[];
}
