import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { IntegrationResponse } from "./integrationresponse";
import { TlsConfig } from "./tlsconfig";
import { IntegrationTypeEnum } from "./integrationtypeenum";
/**
 * <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
**/
export declare class Integration extends SpeakeasyBase {
    cacheKeyParameters?: string[];
    cacheNamespace?: string;
    connectionId?: string;
    connectionType?: ConnectionTypeEnum;
    contentHandling?: ContentHandlingStrategyEnum;
    credentials?: string;
    httpMethod?: string;
    integrationResponses?: Map<string, IntegrationResponse>;
    passthroughBehavior?: string;
    requestParameters?: Map<string, string>;
    requestTemplates?: Map<string, string>;
    timeoutInMillis?: number;
    tlsConfig?: TlsConfig;
    type?: IntegrationTypeEnum;
    uri?: string;
}
