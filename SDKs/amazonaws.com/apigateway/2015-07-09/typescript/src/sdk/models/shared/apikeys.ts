import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiKey } from "./apikey";


// ApiKeys
/** 
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
**/
export class ApiKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ApiKey })
  items?: ApiKey[];

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
