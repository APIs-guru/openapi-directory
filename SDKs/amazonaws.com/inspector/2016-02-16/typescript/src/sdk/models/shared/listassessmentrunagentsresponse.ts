import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentRunAgent } from "./assessmentrunagent";


export class ListAssessmentRunAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunAgents", elemType: shared.AssessmentRunAgent })
  assessmentRunAgents: AssessmentRunAgent[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
