import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiStage } from "./apistage";
import { QuotaSettings } from "./quotasettings";
import { ThrottleSettings } from "./throttlesettings";



// UsagePlan
/** 
 * <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export class UsagePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiStages", elemType: ApiStage })
  apiStages?: ApiStage[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: QuotaSettings;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=throttle" })
  throttle?: ThrottleSettings;
}
