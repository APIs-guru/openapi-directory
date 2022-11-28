import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Credentials
/** 
 * Set short term API credentials.
**/
export class Credentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionToken" })
  sessionToken?: string;
}
