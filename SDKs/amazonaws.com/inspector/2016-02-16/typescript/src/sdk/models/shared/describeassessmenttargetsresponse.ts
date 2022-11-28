import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTarget } from "./assessmenttarget";
import { FailedItemDetails } from "./faileditemdetails";



export class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargets", elemType: AssessmentTarget })
  assessmentTargets: AssessmentTarget[];

  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
