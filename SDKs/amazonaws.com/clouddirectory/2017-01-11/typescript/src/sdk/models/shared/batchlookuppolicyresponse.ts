import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyToPath } from "./policytopath";



// BatchLookupPolicyResponse
/** 
 * Represents the output of a <a>LookupPolicy</a> response operation.
**/
export class BatchLookupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyToPathList", elemType: PolicyToPath })
  policyToPathList?: PolicyToPath[];
}
