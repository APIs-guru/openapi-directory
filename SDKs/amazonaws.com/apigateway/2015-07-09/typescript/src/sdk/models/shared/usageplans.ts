import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsagePlan } from "./usageplan";


// UsagePlans
/** 
 * <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export class UsagePlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UsagePlan })
  items?: UsagePlan[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
