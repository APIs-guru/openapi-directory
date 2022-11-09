import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IssueDetected } from "./issuedetected";
import { SentimentValueEnum } from "./sentimentvalueenum";
/**
 * A list of messages in the session.
**/
export declare class Transcript extends SpeakeasyBase {
    beginOffsetMillis: number;
    content: string;
    endOffsetMillis: number;
    id: string;
    issuesDetected?: IssueDetected[];
    participantId: string;
    participantRole: string;
    sentiment: SentimentValueEnum;
}
