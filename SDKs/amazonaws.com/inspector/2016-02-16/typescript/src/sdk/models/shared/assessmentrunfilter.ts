import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimestampRange } from "./timestamprange";
import { DurationRange } from "./durationrange";
import { TimestampRange } from "./timestamprange";
import { TimestampRange } from "./timestamprange";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";


// AssessmentRunFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
**/
export class AssessmentRunFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTimeRange" })
  completionTimeRange?: TimestampRange;

  @Metadata({ data: "json, name=durationRange" })
  durationRange?: DurationRange;

  @Metadata({ data: "json, name=namePattern" })
  namePattern?: string;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];

  @Metadata({ data: "json, name=startTimeRange" })
  startTimeRange?: TimestampRange;

  @Metadata({ data: "json, name=stateChangeTimeRange" })
  stateChangeTimeRange?: TimestampRange;

  @Metadata({ data: "json, name=states" })
  states?: AssessmentRunStateEnum[];
}
