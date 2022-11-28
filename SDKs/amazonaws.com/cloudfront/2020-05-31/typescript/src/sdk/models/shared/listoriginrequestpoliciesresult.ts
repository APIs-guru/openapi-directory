import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyList } from "./originrequestpolicylist";



export class ListOriginRequestPoliciesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicyList?: OriginRequestPolicyList;
}
