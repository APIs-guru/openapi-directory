import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRun } from "./assessmentrun";
import { FailedItemDetails } from "./faileditemdetails";



export class DescribeAssessmentRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRuns", elemType: AssessmentRun })
  assessmentRuns: AssessmentRun[];

  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
