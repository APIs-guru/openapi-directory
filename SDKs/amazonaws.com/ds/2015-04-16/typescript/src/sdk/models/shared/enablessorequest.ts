import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableSsoRequest
/** 
 * Contains the inputs for the <a>EnableSso</a> operation.
**/
export class EnableSsoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
