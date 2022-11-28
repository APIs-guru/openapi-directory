import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";



// TokenValidityUnitsType
/** 
 * The data type for TokenValidityUnits that specifics the time measurements for token validity.
**/
export class TokenValidityUnitsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: TimeUnitsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IdToken" })
  idToken?: TimeUnitsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RefreshToken" })
  refreshToken?: TimeUnitsTypeEnum;
}
