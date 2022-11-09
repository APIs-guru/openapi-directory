import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RestApi } from "./restapi";


// RestApis
/** 
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class RestApis extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RestApi })
  items?: RestApi[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
