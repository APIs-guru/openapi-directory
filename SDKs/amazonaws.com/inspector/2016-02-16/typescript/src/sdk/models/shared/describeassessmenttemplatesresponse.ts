import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTemplate } from "./assessmenttemplate";
import { FailedItemDetails } from "./faileditemdetails";



export class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplates", elemType: AssessmentTemplate })
  assessmentTemplates: AssessmentTemplate[];

  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
