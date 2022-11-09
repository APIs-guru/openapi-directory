import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthProperties } from "./oauthproperties";


// SapoDataConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using SAPOData. 
**/
export class SapoDataConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationHostUrl" })
  applicationHostUrl: string;

  @Metadata({ data: "json, name=applicationServicePath" })
  applicationServicePath: string;

  @Metadata({ data: "json, name=clientNumber" })
  clientNumber: string;

  @Metadata({ data: "json, name=logonLanguage" })
  logonLanguage?: string;

  @Metadata({ data: "json, name=oAuthProperties" })
  oAuthProperties?: OAuthProperties;

  @Metadata({ data: "json, name=portNumber" })
  portNumber: number;

  @Metadata({ data: "json, name=privateLinkServiceName" })
  privateLinkServiceName?: string;
}
