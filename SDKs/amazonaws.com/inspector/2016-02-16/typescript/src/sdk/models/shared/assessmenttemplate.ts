import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


// AssessmentTemplate
/** 
 * Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
**/
export class AssessmentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=assessmentRunCount" })
  assessmentRunCount: number;

  @Metadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @Metadata({ data: "json, name=lastAssessmentRunArn" })
  lastAssessmentRunArn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @Metadata({ data: "json, name=userAttributesForFindings", elemType: shared.Attribute })
  userAttributesForFindings: Attribute[];
}
