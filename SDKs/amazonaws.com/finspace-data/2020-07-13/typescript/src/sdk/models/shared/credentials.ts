import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Credentials
/** 
 * Set short term API credentials.
**/
export class Credentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;

  @Metadata({ data: "json, name=sessionToken" })
  sessionToken?: string;
}
