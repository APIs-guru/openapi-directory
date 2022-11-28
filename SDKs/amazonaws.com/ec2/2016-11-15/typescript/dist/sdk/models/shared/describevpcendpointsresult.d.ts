import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
/**
 * Contains the output of DescribeVpcEndpoints.
**/
export declare class DescribeVpcEndpointsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcEndpoints?: VpcEndpoint[];
}
