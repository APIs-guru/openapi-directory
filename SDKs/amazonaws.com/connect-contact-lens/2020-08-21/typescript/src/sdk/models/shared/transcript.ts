import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IssueDetected } from "./issuedetected";
import { SentimentValueEnum } from "./sentimentvalueenum";



// Transcript
/** 
 * A list of messages in the session.
**/
export class Transcript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffsetMillis" })
  beginOffsetMillis: number;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=EndOffsetMillis" })
  endOffsetMillis: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=IssuesDetected", elemType: IssueDetected })
  issuesDetected?: IssueDetected[];

  @SpeakeasyMetadata({ data: "json, name=ParticipantId" })
  participantId: string;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole: string;

  @SpeakeasyMetadata({ data: "json, name=Sentiment" })
  sentiment: SentimentValueEnum;
}
