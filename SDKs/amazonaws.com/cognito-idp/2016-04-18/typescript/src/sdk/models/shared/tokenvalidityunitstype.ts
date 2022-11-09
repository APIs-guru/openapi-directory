import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";


// TokenValidityUnitsType
/** 
 * The data type for TokenValidityUnits that specifics the time measurements for token validity.
**/
export class TokenValidityUnitsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: TimeUnitsTypeEnum;

  @Metadata({ data: "json, name=IdToken" })
  idToken?: TimeUnitsTypeEnum;

  @Metadata({ data: "json, name=RefreshToken" })
  refreshToken?: TimeUnitsTypeEnum;
}
