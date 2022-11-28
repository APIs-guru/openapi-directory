import { SpeakeasyBase } from "../../../internal/utils";
import { SpotFleetRequestConfig } from "./spotfleetrequestconfig";
/**
 * Contains the output of DescribeSpotFleetRequests.
**/
export declare class DescribeSpotFleetRequestsResponse extends SpeakeasyBase {
    nextToken?: string;
    spotFleetRequestConfigs?: SpotFleetRequestConfig[];
}
