import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";



// ApiKeys
/** 
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
**/
export class ApiKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ApiKey })
  items?: ApiKey[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
