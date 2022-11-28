import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDetail } from "./servicedetail";
/**
 * Contains the output of DescribeVpcEndpointServices.
**/
export declare class DescribeVpcEndpointServicesResult extends SpeakeasyBase {
    nextToken?: string;
    serviceDetails?: ServiceDetail[];
    serviceNames?: string[];
}
