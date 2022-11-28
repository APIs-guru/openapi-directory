import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableRadiusRequest
/** 
 * Contains the inputs for the <a>DisableRadius</a> operation.
**/
export class DisableRadiusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
