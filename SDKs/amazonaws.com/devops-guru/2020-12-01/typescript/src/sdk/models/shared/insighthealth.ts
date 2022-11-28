import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightHealth
/** 
 *  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. 
**/
export class InsightHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeanTimeToRecoverInMilliseconds" })
  meanTimeToRecoverInMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights?: number;

  @SpeakeasyMetadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights?: number;
}
