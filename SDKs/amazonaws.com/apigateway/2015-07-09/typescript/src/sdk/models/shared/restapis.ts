import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestApi } from "./restapi";



// RestApis
/** 
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class RestApis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RestApi })
  items?: RestApi[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
