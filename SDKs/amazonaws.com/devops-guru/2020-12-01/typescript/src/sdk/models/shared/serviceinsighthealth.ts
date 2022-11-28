import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceInsightHealth
/** 
 * Contains the number of open proactive and reactive insights in an analyzed AWS service.
**/
export class ServiceInsightHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights?: number;

  @SpeakeasyMetadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights?: number;
}
