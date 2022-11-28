import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";



export class UpdateOriginRequestPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicy?: OriginRequestPolicy;
}
