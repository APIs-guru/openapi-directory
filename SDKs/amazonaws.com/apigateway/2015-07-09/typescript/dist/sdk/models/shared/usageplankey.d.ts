import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents a usage plan key to identify a plan customer.</p> <div class="remarks"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>" <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export declare class UsagePlanKey extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
}
