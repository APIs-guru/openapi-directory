import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableSsoRequest
/** 
 * Contains the inputs for the <a>DisableSso</a> operation.
**/
export class DisableSsoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
