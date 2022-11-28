import { SpeakeasyBase } from "../../../internal/utils";
import { UsagePlan } from "./usageplan";
/**
 * <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export declare class UsagePlans extends SpeakeasyBase {
    items?: UsagePlan[];
    position?: string;
}
