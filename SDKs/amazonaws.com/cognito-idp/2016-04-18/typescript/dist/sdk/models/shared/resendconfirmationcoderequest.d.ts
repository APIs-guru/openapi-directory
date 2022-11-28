import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * Represents the request to resend the confirmation code.
**/
export declare class ResendConfirmationCodeRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    clientId: string;
    clientMetadata?: Map<string, string>;
    secretHash?: string;
    userContextData?: UserContextDataType;
    username: string;
}
