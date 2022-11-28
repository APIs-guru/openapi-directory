import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=cacheKeyParameters" })
  cacheKeyParameters?: string[];

  @SpeakeasyMetadata({ data: "json, name=cacheNamespace" })
  cacheNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentHandling" })
  contentHandling?: ContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationResponses", elemType: IntegrationResponse })
  integrationResponses?: Map<string, IntegrationResponse>;

  @SpeakeasyMetadata({ data: "json, name=passthroughBehavior" })
  passthroughBehavior?: string;

  @SpeakeasyMetadata({ data: "json, name=requestParameters" })
  requestParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestTemplates" })
  requestTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMillis" })
  timeoutInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=tlsConfig" })
  tlsConfig?: TlsConfig;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
