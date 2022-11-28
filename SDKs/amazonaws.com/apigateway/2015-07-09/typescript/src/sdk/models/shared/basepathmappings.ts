import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasePathMapping } from "./basepathmapping";



// BasePathMappings
/** 
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
**/
export class BasePathMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BasePathMapping })
  items?: BasePathMapping[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
