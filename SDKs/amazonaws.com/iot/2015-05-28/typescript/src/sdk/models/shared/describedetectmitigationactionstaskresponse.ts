import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";



export class DescribeDetectMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskSummary" })
  taskSummary?: DetectMitigationActionsTaskSummary;
}
