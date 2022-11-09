import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentFilter } from "./agentfilter";


export class ListAssessmentRunAgentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @Metadata({ data: "json, name=filter" })
  filter?: AgentFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
