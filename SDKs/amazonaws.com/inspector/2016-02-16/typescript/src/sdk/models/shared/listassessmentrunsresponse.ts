import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssessmentRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArns" })
  assessmentRunArns: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
