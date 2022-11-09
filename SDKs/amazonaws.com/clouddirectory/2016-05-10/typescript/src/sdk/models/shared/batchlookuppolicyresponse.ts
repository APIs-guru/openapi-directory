import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyToPath } from "./policytopath";


// BatchLookupPolicyResponse
/** 
 * Represents the output of a <a>LookupPolicy</a> response operation.
**/
export class BatchLookupPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyToPathList", elemType: shared.PolicyToPath })
  policyToPathList?: PolicyToPath[];
}
