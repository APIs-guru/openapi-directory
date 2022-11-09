import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentTemplate } from "./assessmenttemplate";
import { FailedItemDetails } from "./faileditemdetails";


export class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplates", elemType: shared.AssessmentTemplate })
  assessmentTemplates: AssessmentTemplate[];

  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}
