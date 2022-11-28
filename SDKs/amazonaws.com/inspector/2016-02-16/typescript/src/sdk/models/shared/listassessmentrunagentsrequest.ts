import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentFilter } from "./agentfilter";



export class ListAssessmentRunAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: AgentFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
