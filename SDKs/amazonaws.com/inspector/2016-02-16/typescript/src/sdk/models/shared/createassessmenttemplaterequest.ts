import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


export class CreateAssessmentTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @Metadata({ data: "json, name=assessmentTemplateName" })
  assessmentTemplateName: string;

  @Metadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @Metadata({ data: "json, name=userAttributesForFindings", elemType: shared.Attribute })
  userAttributesForFindings?: Attribute[];
}
