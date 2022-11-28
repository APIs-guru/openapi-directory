import { SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupSummary } from "./keygroupsummary";
/**
 * A list of key groups.
**/
export declare class KeyGroupList extends SpeakeasyBase {
    items?: KeyGroupSummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
