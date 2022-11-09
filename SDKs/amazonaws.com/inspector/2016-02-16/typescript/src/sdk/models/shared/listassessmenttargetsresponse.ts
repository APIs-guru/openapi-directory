import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssessmentTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
