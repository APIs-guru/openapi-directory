import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";



export class CreateOriginRequestPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicy?: OriginRequestPolicy;
}
