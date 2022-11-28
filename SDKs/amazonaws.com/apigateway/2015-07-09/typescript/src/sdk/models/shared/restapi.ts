import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKeySourceTypeEnum } from "./apikeysourcetypeenum";
import { EndpointConfiguration } from "./endpointconfiguration";



// RestApi
/** 
 * <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class RestApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeySource" })
  apiKeySource?: ApiKeySourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=binaryMediaTypes" })
  binaryMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: EndpointConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumCompressionSize" })
  minimumCompressionSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
