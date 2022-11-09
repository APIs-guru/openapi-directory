import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedbackValueEnum } from "./feedbackvalueenum";
import { SeverityLevelEnum } from "./severitylevelenum";
import { StatusEnum } from "./statusenum";


// Problem
/** 
 * Describes a problem that is detected by correlating observations.
**/
export class Problem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AffectedResource" })
  affectedResource?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=Feedback" })
  feedback?: Map<string, FeedbackValueEnum>;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Insights" })
  insights?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;

  @Metadata({ data: "json, name=SeverityLevel" })
  severityLevel?: SeverityLevelEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
