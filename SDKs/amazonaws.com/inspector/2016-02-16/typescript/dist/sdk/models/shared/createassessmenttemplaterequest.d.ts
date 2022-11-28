import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
export declare class CreateAssessmentTemplateRequest extends SpeakeasyBase {
    assessmentTargetArn: string;
    assessmentTemplateName: string;
    durationInSeconds: number;
    rulesPackageArns: string[];
    userAttributesForFindings?: Attribute[];
}
