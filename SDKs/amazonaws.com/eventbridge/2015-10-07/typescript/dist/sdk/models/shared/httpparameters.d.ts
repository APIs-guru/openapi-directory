import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
**/
export declare class HttpParameters extends SpeakeasyBase {
    headerParameters?: Map<string, string>;
    pathParameterValues?: string[];
    queryStringParameters?: Map<string, string>;
}
