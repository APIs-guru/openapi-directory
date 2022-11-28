import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { ContextDataType } from "./contextdatatype";
/**
 * Initiates the authorization request, as an administrator.
**/
export declare class AdminInitiateAuthRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    authFlow: AuthFlowTypeEnum;
    authParameters?: Map<string, string>;
    clientId: string;
    clientMetadata?: Map<string, string>;
    contextData?: ContextDataType;
    userPoolId: string;
}
