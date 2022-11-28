import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.
**/
export declare class Model extends SpeakeasyBase {
    contentType?: string;
    description?: string;
    modelId?: string;
    name: string;
    schema?: string;
}
