import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveInstance } from "./activeinstance";
export declare class DescribeFleetInstancesResult extends SpeakeasyBase {
    activeInstances?: ActiveInstance[];
    fleetId?: string;
    nextToken?: string;
}
