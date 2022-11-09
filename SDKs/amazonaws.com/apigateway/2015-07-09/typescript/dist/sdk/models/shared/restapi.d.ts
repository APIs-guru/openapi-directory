import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKeySourceTypeEnum } from "./apikeysourcetypeenum";
import { EndpointConfiguration } from "./endpointconfiguration";
/**
 * <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export declare class RestApi extends SpeakeasyBase {
    apiKeySource?: ApiKeySourceTypeEnum;
    binaryMediaTypes?: string[];
    createdDate?: Date;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    endpointConfiguration?: EndpointConfiguration;
    id?: string;
    minimumCompressionSize?: number;
    name?: string;
    policy?: string;
    tags?: Map<string, string>;
    version?: string;
    warnings?: string[];
}
