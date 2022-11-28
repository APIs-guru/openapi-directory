import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the configuration to override the risk decision.
**/
export declare class RiskExceptionConfigurationType extends SpeakeasyBase {
    blockedIpRangeList?: string[];
    skippedIpRangeList?: string[];
}
