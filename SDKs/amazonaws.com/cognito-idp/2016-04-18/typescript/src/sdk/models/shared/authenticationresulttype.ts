import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewDeviceMetadataType } from "./newdevicemetadatatype";


// AuthenticationResultType
/** 
 * The authentication result.
**/
export class AuthenticationResultType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=ExpiresIn" })
  expiresIn?: number;

  @Metadata({ data: "json, name=IdToken" })
  idToken?: string;

  @Metadata({ data: "json, name=NewDeviceMetadata" })
  newDeviceMetadata?: NewDeviceMetadataType;

  @Metadata({ data: "json, name=RefreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=TokenType" })
  tokenType?: string;
}
