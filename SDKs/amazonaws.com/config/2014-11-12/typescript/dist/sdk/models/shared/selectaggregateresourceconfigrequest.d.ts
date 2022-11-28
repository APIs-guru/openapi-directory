import { SpeakeasyBase } from "../../../internal/utils";
export declare class SelectAggregateResourceConfigRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    expression: string;
    limit?: number;
    maxResults?: number;
    nextToken?: string;
}
