import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



// AssessmentTemplate
/** 
 * Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
**/
export class AssessmentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentRunCount" })
  assessmentRunCount: number;

  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=lastAssessmentRunArn" })
  lastAssessmentRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @SpeakeasyMetadata({ data: "json, name=userAttributesForFindings", elemType: Attribute })
  userAttributesForFindings: Attribute[];
}
