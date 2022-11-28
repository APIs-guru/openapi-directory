import { SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";
/**
 * The GetEntitlementsRequest contains results from the GetEntitlements operation.
**/
export declare class GetEntitlementsResult extends SpeakeasyBase {
    entitlements?: Entitlement[];
    nextToken?: string;
}
