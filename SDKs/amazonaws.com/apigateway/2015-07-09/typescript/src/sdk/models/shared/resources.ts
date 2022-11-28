import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// Resources
/** 
 * <p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class Resources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Resource })
  items?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
