import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunAgent } from "./assessmentrunagent";



export class ListAssessmentRunAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunAgents", elemType: AssessmentRunAgent })
  assessmentRunAgents: AssessmentRunAgent[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
