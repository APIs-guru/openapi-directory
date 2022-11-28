import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneratedPolicy } from "./generatedpolicy";



// GeneratedPolicyResult
/** 
 * Contains the text for the generated policy and its details.
**/
export class GeneratedPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedPolicies", elemType: GeneratedPolicy })
  generatedPolicies?: GeneratedPolicy[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: any;
}
