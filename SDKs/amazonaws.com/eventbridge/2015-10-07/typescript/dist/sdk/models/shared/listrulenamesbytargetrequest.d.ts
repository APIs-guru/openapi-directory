import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListRuleNamesByTargetRequest extends SpeakeasyBase {
    eventBusName?: string;
    limit?: number;
    nextToken?: string;
    targetArn: string;
}
