import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssessmentTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
