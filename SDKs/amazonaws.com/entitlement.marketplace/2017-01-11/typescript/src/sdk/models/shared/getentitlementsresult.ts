import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entitlement } from "./entitlement";


// GetEntitlementsResult
/** 
 * The GetEntitlementsRequest contains results from the GetEntitlements operation.
**/
export class GetEntitlementsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entitlements", elemType: shared.Entitlement })
  entitlements?: Entitlement[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
