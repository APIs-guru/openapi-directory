import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableSsoRequest
/** 
 * Contains the inputs for the <a>EnableSso</a> operation.
**/
export class EnableSsoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
