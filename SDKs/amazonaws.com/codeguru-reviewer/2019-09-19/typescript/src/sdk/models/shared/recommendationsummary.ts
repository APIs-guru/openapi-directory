import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationCategoryEnum } from "./recommendationcategoryenum";
import { RuleMetadata } from "./rulemetadata";
import { SeverityEnum } from "./severityenum";



// RecommendationSummary
/** 
 *  Information about recommendations. 
**/
export class RecommendationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndLine" })
  endLine?: number;

  @SpeakeasyMetadata({ data: "json, name=FilePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationCategory" })
  recommendationCategory?: RecommendationCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleMetadata" })
  ruleMetadata?: RuleMetadata;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: SeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=StartLine" })
  startLine?: number;
}
