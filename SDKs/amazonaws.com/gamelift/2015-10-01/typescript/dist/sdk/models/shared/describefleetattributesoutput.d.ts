import { SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributes } from "./fleetattributes";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetAttributesOutput extends SpeakeasyBase {
    fleetAttributes?: FleetAttributes[];
    nextToken?: string;
}
