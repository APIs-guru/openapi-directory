import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.
**/
export declare class InsightHealth extends SpeakeasyBase {
    meanTimeToRecoverInMilliseconds?: number;
    openProactiveInsights?: number;
    openReactiveInsights?: number;
}
