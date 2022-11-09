import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentRun } from "./assessmentrun";
import { FailedItemDetails } from "./faileditemdetails";


export class DescribeAssessmentRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRuns", elemType: shared.AssessmentRun })
  assessmentRuns: AssessmentRun[];

  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
