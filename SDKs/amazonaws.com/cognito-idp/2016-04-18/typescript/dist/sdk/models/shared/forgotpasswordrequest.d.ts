import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * Represents the request to reset a user's password.
**/
export declare class ForgotPasswordRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    clientId: string;
    clientMetadata?: Map<string, string>;
    secretHash?: string;
    userContextData?: UserContextDataType;
    username: string;
}
