import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightHealth
/** 
 *  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. 
**/
export class InsightHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeanTimeToRecoverInMilliseconds" })
  meanTimeToRecoverInMilliseconds?: number;

  @Metadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights?: number;

  @Metadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights?: number;
}
