import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategyTypeEnum } from "./routingstrategytypeenum";
/**
 * Represents the input for a request operation.
**/
export declare class ListAliasesInput extends SpeakeasyBase {
    limit?: number;
    name?: string;
    nextToken?: string;
    routingStrategyType?: RoutingStrategyTypeEnum;
}
