import { SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupMember } from "./origingroupmember";
/**
 * A complex data type for the origins included in an origin group.
**/
export declare class OriginGroupMembers extends SpeakeasyBase {
    items: OriginGroupMember[];
    quantity: number;
}
