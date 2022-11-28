import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemovePermissionResponse
/** 
 * The structure representing the <code>removePermissionResponse</code>.
**/
export class RemovePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
