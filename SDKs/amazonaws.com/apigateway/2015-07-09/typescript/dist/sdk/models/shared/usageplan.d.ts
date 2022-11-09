import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiStage } from "./apistage";
import { QuotaSettings } from "./quotasettings";
import { ThrottleSettings } from "./throttlesettings";
/**
 * <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export declare class UsagePlan extends SpeakeasyBase {
    apiStages?: ApiStage[];
    description?: string;
    id?: string;
    name?: string;
    productCode?: string;
    quota?: QuotaSettings;
    tags?: Map<string, string>;
    throttle?: ThrottleSettings;
}
