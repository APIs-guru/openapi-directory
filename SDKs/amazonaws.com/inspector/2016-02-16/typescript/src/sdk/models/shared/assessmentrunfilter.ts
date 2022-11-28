import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestampRange } from "./timestamprange";
import { DurationRange } from "./durationrange";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";



// AssessmentRunFilter
/** 
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
**/
export class AssessmentRunFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTimeRange" })
  completionTimeRange?: TimestampRange;

  @SpeakeasyMetadata({ data: "json, name=durationRange" })
  durationRange?: DurationRange;

  @SpeakeasyMetadata({ data: "json, name=namePattern" })
  namePattern?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=startTimeRange" })
  startTimeRange?: TimestampRange;

  @SpeakeasyMetadata({ data: "json, name=stateChangeTimeRange" })
  stateChangeTimeRange?: TimestampRange;

  @SpeakeasyMetadata({ data: "json, name=states" })
  states?: AssessmentRunStateEnum[];
}
