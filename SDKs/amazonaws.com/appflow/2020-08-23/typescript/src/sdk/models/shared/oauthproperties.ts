import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuthProperties
/** 
 *  The OAuth properties required for OAuth type authentication. 
**/
export class OAuthProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=authCodeUrl" })
  authCodeUrl: string;

  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes: string[];

  @Metadata({ data: "json, name=tokenUrl" })
  tokenUrl: string;
}
