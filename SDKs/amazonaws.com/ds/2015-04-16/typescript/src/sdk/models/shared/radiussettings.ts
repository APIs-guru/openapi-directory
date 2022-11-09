import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RadiusAuthenticationProtocolEnum } from "./radiusauthenticationprotocolenum";


// RadiusSettings
/** 
 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
**/
export class RadiusSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationProtocol" })
  authenticationProtocol?: RadiusAuthenticationProtocolEnum;

  @Metadata({ data: "json, name=DisplayLabel" })
  displayLabel?: string;

  @Metadata({ data: "json, name=RadiusPort" })
  radiusPort?: number;

  @Metadata({ data: "json, name=RadiusRetries" })
  radiusRetries?: number;

  @Metadata({ data: "json, name=RadiusServers" })
  radiusServers?: string[];

  @Metadata({ data: "json, name=RadiusTimeout" })
  radiusTimeout?: number;

  @Metadata({ data: "json, name=SharedSecret" })
  sharedSecret?: string;

  @Metadata({ data: "json, name=UseSameUsername" })
  useSameUsername?: boolean;
}
