import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Credentials
/** 
 * Credentials for the provided identity ID.
**/
export class Credentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=SecretKey" })
  secretKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionToken" })
  sessionToken?: string;
}
