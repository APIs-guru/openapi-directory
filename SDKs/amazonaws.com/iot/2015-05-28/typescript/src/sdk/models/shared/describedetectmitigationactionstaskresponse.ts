import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";


export class DescribeDetectMitigationActionsTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskSummary" })
  taskSummary?: DetectMitigationActionsTaskSummary;
}
