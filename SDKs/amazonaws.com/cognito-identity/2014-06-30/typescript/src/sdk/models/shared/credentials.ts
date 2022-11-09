import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Credentials
/** 
 * Credentials for the provided identity ID.
**/
export class Credentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=Expiration" })
  expiration?: Date;

  @Metadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @Metadata({ data: "json, name=SessionToken" })
  sessionToken?: string;
}
