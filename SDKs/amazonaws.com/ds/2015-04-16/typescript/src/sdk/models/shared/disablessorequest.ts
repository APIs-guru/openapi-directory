import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableSsoRequest
/** 
 * Contains the inputs for the <a>DisableSso</a> operation.
**/
export class DisableSsoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
