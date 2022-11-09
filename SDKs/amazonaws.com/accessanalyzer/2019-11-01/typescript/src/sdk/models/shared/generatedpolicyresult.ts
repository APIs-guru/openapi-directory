import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeneratedPolicy } from "./generatedpolicy";


// GeneratedPolicyResult
/** 
 * Contains the text for the generated policy and its details.
**/
export class GeneratedPolicyResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=generatedPolicies", elemType: shared.GeneratedPolicy })
  generatedPolicies?: GeneratedPolicy[];

  @Metadata({ data: "json, name=properties" })
  properties: any;
}
