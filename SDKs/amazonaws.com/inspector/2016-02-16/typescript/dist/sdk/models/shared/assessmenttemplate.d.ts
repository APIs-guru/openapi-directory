import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
/**
 * Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
**/
export declare class AssessmentTemplate extends SpeakeasyBase {
    arn: string;
    assessmentRunCount: number;
    assessmentTargetArn: string;
    createdAt: Date;
    durationInSeconds: number;
    lastAssessmentRunArn?: string;
    name: string;
    rulesPackageArns: string[];
    userAttributesForFindings: Attribute[];
}
