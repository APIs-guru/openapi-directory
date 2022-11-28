import { SpeakeasyBase } from "../../../internal/utils";
import { NewDeviceMetadataType } from "./newdevicemetadatatype";
/**
 * The authentication result.
**/
export declare class AuthenticationResultType extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    idToken?: string;
    newDeviceMetadata?: NewDeviceMetadataType;
    refreshToken?: string;
    tokenType?: string;
}
