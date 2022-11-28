import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeMatchmakingConfigurationsInput extends SpeakeasyBase {
    limit?: number;
    names?: string[];
    nextToken?: string;
    ruleSetName?: string;
}
