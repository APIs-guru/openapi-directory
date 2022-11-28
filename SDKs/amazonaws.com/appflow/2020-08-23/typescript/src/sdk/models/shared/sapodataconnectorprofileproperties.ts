import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthProperties } from "./oauthproperties";



// SapoDataConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using SAPOData. 
**/
export class SapoDataConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationHostUrl" })
  applicationHostUrl: string;

  @SpeakeasyMetadata({ data: "json, name=applicationServicePath" })
  applicationServicePath: string;

  @SpeakeasyMetadata({ data: "json, name=clientNumber" })
  clientNumber: string;

  @SpeakeasyMetadata({ data: "json, name=logonLanguage" })
  logonLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthProperties" })
  oAuthProperties?: OAuthProperties;

  @SpeakeasyMetadata({ data: "json, name=portNumber" })
  portNumber: number;

  @SpeakeasyMetadata({ data: "json, name=privateLinkServiceName" })
  privateLinkServiceName?: string;
}
