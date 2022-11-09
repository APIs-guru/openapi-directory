import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stage } from "./stage";


// Stages
/** 
 * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
**/
export class Stages extends SpeakeasyBase {
  @Metadata({ data: "json, name=item", elemType: shared.Stage })
  item?: Stage[];
}
