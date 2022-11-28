import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



export class CreateAssessmentTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateName" })
  assessmentTemplateName: string;

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @SpeakeasyMetadata({ data: "json, name=userAttributesForFindings", elemType: Attribute })
  userAttributesForFindings?: Attribute[];
}
