import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsagePlan } from "./usageplan";



// UsagePlans
/** 
 * <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export class UsagePlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UsagePlan })
  items?: UsagePlan[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
