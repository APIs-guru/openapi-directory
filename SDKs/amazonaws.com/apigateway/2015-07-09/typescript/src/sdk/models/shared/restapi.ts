import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKeySourceTypeEnum } from "./apikeysourcetypeenum";
import { EndpointConfiguration } from "./endpointconfiguration";


// RestApi
/** 
 * <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class RestApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeySource" })
  apiKeySource?: ApiKeySourceTypeEnum;

  @Metadata({ data: "json, name=binaryMediaTypes" })
  binaryMediaTypes?: string[];

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @Metadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: EndpointConfiguration;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=minimumCompressionSize" })
  minimumCompressionSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
