import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";



export class GetOriginRequestPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicy?: OriginRequestPolicy;
}
