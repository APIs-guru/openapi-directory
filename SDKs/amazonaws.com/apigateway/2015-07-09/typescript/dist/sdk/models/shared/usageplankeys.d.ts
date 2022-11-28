import { SpeakeasyBase } from "../../../internal/utils";
import { UsagePlanKey } from "./usageplankey";
/**
 * <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
**/
export declare class UsagePlanKeys extends SpeakeasyBase {
    items?: UsagePlanKey[];
    position?: string;
}
