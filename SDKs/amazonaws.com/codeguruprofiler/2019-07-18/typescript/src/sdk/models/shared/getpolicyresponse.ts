import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPolicyResponse
/** 
 * The structure representing the <code>getPolicyResponse</code>.
**/
export class GetPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
