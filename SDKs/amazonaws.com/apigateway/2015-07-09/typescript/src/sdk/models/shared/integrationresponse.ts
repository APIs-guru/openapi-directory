import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";


// IntegrationResponse
/** 
 * <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
**/
export class IntegrationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentHandling" })
  contentHandling?: ContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @Metadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=selectionPattern" })
  selectionPattern?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
