import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasicAuthCredentials
/** 
 *  The basic auth credentials required for basic authentication. 
**/
export class BasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
