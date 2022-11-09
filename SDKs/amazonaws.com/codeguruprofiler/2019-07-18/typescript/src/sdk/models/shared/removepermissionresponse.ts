import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemovePermissionResponse
/** 
 * The structure representing the <code>removePermissionResponse</code>.
**/
export class RemovePermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
