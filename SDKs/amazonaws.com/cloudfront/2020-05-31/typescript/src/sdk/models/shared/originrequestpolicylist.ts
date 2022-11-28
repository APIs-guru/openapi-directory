import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicySummary } from "./originrequestpolicysummary";



// OriginRequestPolicyList
/** 
 * A list of origin request policies.
**/
export class OriginRequestPolicyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginRequestPolicySummary })
  items?: OriginRequestPolicySummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
