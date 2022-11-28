import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeader } from "./httpheader";
/**
 * Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
export declare class ContextDataType extends SpeakeasyBase {
    encodedData?: string;
    httpHeaders: HttpHeader[];
    ipAddress: string;
    serverName: string;
    serverPath: string;
}
