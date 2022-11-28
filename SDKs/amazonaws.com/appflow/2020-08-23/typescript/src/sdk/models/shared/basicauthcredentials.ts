import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicAuthCredentials
/** 
 *  The basic auth credentials required for basic authentication. 
**/
export class BasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
