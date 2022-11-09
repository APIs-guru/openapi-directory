import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableRadiusRequest
/** 
 * Contains the inputs for the <a>DisableRadius</a> operation.
**/
export class DisableRadiusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
