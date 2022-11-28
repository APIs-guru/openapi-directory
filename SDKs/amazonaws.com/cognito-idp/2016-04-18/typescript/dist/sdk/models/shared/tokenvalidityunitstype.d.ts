import { SpeakeasyBase } from "../../../internal/utils";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";
/**
 * The data type for TokenValidityUnits that specifics the time measurements for token validity.
**/
export declare class TokenValidityUnitsType extends SpeakeasyBase {
    accessToken?: TimeUnitsTypeEnum;
    idToken?: TimeUnitsTypeEnum;
    refreshToken?: TimeUnitsTypeEnum;
}
