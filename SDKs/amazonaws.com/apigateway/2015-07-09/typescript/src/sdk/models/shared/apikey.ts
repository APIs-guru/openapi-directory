import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiKey
/** 
 * <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
**/
export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stageKeys" })
  stageKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
