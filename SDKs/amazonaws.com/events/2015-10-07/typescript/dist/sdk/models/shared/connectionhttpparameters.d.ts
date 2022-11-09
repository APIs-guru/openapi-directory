import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionBodyParameter } from "./connectionbodyparameter";
import { ConnectionHeaderParameter } from "./connectionheaderparameter";
import { ConnectionQueryStringParameter } from "./connectionquerystringparameter";
/**
 * Contains additional parameters for the connection.
**/
export declare class ConnectionHttpParameters extends SpeakeasyBase {
    bodyParameters?: ConnectionBodyParameter[];
    headerParameters?: ConnectionHeaderParameter[];
    queryStringParameters?: ConnectionQueryStringParameter[];
}
