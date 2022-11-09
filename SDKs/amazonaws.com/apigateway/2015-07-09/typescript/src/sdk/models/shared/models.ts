import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Model } from "./model";


// Models
/** 
 * <p>Represents a collection of <a>Model</a> resources.</p> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
**/
export class Models extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Model })
  items?: Model[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
