import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewDeviceMetadataType } from "./newdevicemetadatatype";



// AuthenticationResultType
/** 
 * The authentication result.
**/
export class AuthenticationResultType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=IdToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NewDeviceMetadata" })
  newDeviceMetadata?: NewDeviceMetadataType;

  @SpeakeasyMetadata({ data: "json, name=RefreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenType" })
  tokenType?: string;
}
