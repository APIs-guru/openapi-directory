import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
export declare class DescribeAgentsRequest extends SpeakeasyBase {
    agentIds?: string[];
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
