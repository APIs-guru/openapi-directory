import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div>
**/
export declare class Usage extends SpeakeasyBase {
    endDate?: string;
    items?: Map<string, number[][]>;
    position?: string;
    startDate?: string;
    usagePlanId?: string;
}
