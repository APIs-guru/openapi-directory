import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersion } from "./policyversion";



// ListPolicyVersionsResponse
/** 
 * Contains the response to a successful <a>ListPolicyVersions</a> request. 
**/
export class ListPolicyVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: PolicyVersion })
  versions?: PolicyVersion[];
}
