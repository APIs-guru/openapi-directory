import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthProperties } from "./oauthproperties";
/**
 *  The connector-specific profile properties required when using SAPOData.
**/
export declare class SapoDataConnectorProfileProperties extends SpeakeasyBase {
    applicationHostUrl: string;
    applicationServicePath: string;
    clientNumber: string;
    logonLanguage?: string;
    oAuthProperties?: OAuthProperties;
    portNumber: number;
    privateLinkServiceName?: string;
}
