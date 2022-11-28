import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutPermissionResponse
/** 
 * The structure representing the <code>putPermissionResponse</code>.
**/
export class PutPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
