import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RadiusAuthenticationProtocolEnum } from "./radiusauthenticationprotocolenum";



// RadiusSettings
/** 
 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
**/
export class RadiusSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationProtocol" })
  authenticationProtocol?: RadiusAuthenticationProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=DisplayLabel" })
  displayLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=RadiusPort" })
  radiusPort?: number;

  @SpeakeasyMetadata({ data: "json, name=RadiusRetries" })
  radiusRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=RadiusServers" })
  radiusServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=RadiusTimeout" })
  radiusTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=SharedSecret" })
  sharedSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=UseSameUsername" })
  useSameUsername?: boolean;
}
