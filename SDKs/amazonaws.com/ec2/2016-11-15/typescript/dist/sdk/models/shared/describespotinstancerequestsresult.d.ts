import { SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceRequest } from "./spotinstancerequest";
/**
 * Contains the output of DescribeSpotInstanceRequests.
**/
export declare class DescribeSpotInstanceRequestsResult extends SpeakeasyBase {
    nextToken?: string;
    spotInstanceRequests?: SpotInstanceRequest[];
}
