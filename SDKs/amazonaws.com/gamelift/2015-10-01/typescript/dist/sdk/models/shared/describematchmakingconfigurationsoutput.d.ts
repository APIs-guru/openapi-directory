import { SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeMatchmakingConfigurationsOutput extends SpeakeasyBase {
    configurations?: MatchmakingConfiguration[];
    nextToken?: string;
}
