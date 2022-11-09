import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentTarget } from "./assessmenttarget";
import { FailedItemDetails } from "./faileditemdetails";


export class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargets", elemType: shared.AssessmentTarget })
  assessmentTargets: AssessmentTarget[];

  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
