import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * The request representing the confirmation for a password reset.
**/
export declare class ConfirmForgotPasswordRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    clientId: string;
    clientMetadata?: Map<string, string>;
    confirmationCode: string;
    password: string;
    secretHash?: string;
    userContextData?: UserContextDataType;
    username: string;
}
