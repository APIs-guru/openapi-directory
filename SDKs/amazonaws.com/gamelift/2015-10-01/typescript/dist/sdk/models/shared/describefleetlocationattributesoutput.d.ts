import { SpeakeasyBase } from "../../../internal/utils";
import { LocationAttributes } from "./locationattributes";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetLocationAttributesOutput extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    locationAttributes?: LocationAttributes[];
    nextToken?: string;
}
