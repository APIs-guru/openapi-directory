import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AttributeType } from "./attributetype";
import { UserContextDataType } from "./usercontextdatatype";
/**
 * Represents the request to register a user.
**/
export declare class SignUpRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    clientId: string;
    clientMetadata?: Map<string, string>;
    password: string;
    secretHash?: string;
    userAttributes?: AttributeType[];
    userContextData?: UserContextDataType;
    username: string;
    validationData?: AttributeType[];
}
