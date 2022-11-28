import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * Describes a route in a route table.
**/
export declare class Route extends SpeakeasyBase {
    destination?: string;
    destinationType?: DestinationTypeEnum;
    target?: string;
    targetType?: TargetTypeEnum;
}
