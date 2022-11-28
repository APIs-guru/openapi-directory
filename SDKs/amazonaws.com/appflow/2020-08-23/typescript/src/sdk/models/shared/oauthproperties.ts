import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OAuthProperties
/** 
 *  The OAuth properties required for OAuth type authentication. 
**/
export class OAuthProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authCodeUrl" })
  authCodeUrl: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes: string[];

  @SpeakeasyMetadata({ data: "json, name=tokenUrl" })
  tokenUrl: string;
}
