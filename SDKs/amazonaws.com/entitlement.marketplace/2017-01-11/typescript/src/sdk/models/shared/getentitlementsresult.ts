import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";



// GetEntitlementsResult
/** 
 * The GetEntitlementsRequest contains results from the GetEntitlements operation.
**/
export class GetEntitlementsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: Entitlement })
  entitlements?: Entitlement[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
