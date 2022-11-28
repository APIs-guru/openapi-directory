import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTemplate } from "./assessmenttemplate";
import { FailedItemDetails } from "./faileditemdetails";
export declare class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
    assessmentTemplates: AssessmentTemplate[];
    failedItems: Map<string, FailedItemDetails>;
}
