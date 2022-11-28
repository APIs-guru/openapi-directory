import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTargetsByRuleRequest extends SpeakeasyBase {
    eventBusName?: string;
    limit?: number;
    nextToken?: string;
    rule: string;
}
