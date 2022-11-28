import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * Information that explicitly denies authorization.
**/
export declare class ExplicitDeny extends SpeakeasyBase {
    policies?: Policy[];
}
