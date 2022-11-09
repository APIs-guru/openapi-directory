import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { IntegrationResponse } from "./integrationresponse";
import { TlsConfig } from "./tlsconfig";
import { IntegrationTypeEnum } from "./integrationtypeenum";


// Integration
/** 
 * <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
**/
export class Integration extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheKeyParameters" })
  cacheKeyParameters?: string[];

  @Metadata({ data: "json, name=cacheNamespace" })
  cacheNamespace?: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=contentHandling" })
  contentHandling?: ContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=credentials" })
  credentials?: string;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=integrationResponses", elemType: shared.IntegrationResponse })
  integrationResponses?: Map<string, IntegrationResponse>;

  @Metadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: string;

  @Metadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @Metadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @Metadata({ data: "json, name=tlsConfig" })
  tlsConfig?: TlsConfig;

  @Metadata({ data: "json, name=type" })
  type?: IntegrationTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
