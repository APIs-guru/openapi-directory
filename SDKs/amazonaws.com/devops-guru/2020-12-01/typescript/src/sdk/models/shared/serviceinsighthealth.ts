import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceInsightHealth
/** 
 * Contains the number of open proactive and reactive insights in an analyzed AWS service.
**/
export class ServiceInsightHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpenProactiveInsights" })
  openProactiveInsights?: number;

  @Metadata({ data: "json, name=OpenReactiveInsights" })
  openReactiveInsights?: number;
}
