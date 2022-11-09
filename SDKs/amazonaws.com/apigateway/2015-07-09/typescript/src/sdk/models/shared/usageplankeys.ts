import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsagePlanKey } from "./usageplankey";


// UsagePlanKeys
/** 
 * <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export class UsagePlanKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UsagePlanKey })
  items?: UsagePlanKey[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
