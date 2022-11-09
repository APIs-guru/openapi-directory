import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationCategoryEnum } from "./recommendationcategoryenum";
import { RuleMetadata } from "./rulemetadata";
import { SeverityEnum } from "./severityenum";


// RecommendationSummary
/** 
 *  Information about recommendations. 
**/
export class RecommendationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndLine" })
  endLine?: number;

  @Metadata({ data: "json, name=FilePath" })
  filePath?: string;

  @Metadata({ data: "json, name=RecommendationCategory" })
  recommendationCategory?: RecommendationCategoryEnum;

  @Metadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @Metadata({ data: "json, name=RuleMetadata" })
  ruleMetadata?: RuleMetadata;

  @Metadata({ data: "json, name=Severity" })
  severity?: SeverityEnum;

  @Metadata({ data: "json, name=StartLine" })
  startLine?: number;
}
