import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiStage } from "./apistage";
import { QuotaSettings } from "./quotasettings";
import { ThrottleSettings } from "./throttlesettings";


// UsagePlan
/** 
 * <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export class UsagePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiStages", elemType: shared.ApiStage })
  apiStages?: ApiStage[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=quota" })
  quota?: QuotaSettings;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=throttle" })
  throttle?: ThrottleSettings;
}
