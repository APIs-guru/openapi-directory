import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
**/
export declare class ImplicitDeny extends SpeakeasyBase {
    policies?: Policy[];
}
