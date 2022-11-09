import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BasePathMapping } from "./basepathmapping";


// BasePathMappings
/** 
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
**/
export class BasePathMappings extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BasePathMapping })
  items?: BasePathMapping[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
