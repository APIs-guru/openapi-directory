import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// Resources
/** 
 * <p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
export class Resources extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Resource })
  items?: Resource[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
