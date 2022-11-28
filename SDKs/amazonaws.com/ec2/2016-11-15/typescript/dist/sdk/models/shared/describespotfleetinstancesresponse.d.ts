import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveInstance } from "./activeinstance";
/**
 * Contains the output of DescribeSpotFleetInstances.
**/
export declare class DescribeSpotFleetInstancesResponse extends SpeakeasyBase {
    activeInstances?: ActiveInstance[];
    nextToken?: string;
    spotFleetRequestId?: string;
}
