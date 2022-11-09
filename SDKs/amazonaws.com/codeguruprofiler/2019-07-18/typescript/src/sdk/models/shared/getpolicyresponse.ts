import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPolicyResponse
/** 
 * The structure representing the <code>getPolicyResponse</code>.
**/
export class GetPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
