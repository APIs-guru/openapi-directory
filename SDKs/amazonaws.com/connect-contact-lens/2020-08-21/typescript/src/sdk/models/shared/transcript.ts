import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IssueDetected } from "./issuedetected";
import { SentimentValueEnum } from "./sentimentvalueenum";


// Transcript
/** 
 * A list of messages in the session.
**/
export class Transcript extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffsetMillis" })
  beginOffsetMillis: number;

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=EndOffsetMillis" })
  endOffsetMillis: number;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=IssuesDetected", elemType: shared.IssueDetected })
  issuesDetected?: IssueDetected[];

  @Metadata({ data: "json, name=ParticipantId" })
  participantId: string;

  @Metadata({ data: "json, name=ParticipantRole" })
  participantRole: string;

  @Metadata({ data: "json, name=Sentiment" })
  sentiment: SentimentValueEnum;
}
