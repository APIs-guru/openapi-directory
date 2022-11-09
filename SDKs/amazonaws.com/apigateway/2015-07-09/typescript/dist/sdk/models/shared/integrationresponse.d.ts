import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
/**
 * <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
**/
export declare class IntegrationResponse extends SpeakeasyBase {
    contentHandling?: ContentHandlingStrategyEnum;
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    selectionPattern?: string;
    statusCode?: string;
}
