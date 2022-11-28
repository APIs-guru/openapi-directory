import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
import { ContextDataType } from "./contextdatatype";
/**
 * The request to respond to the authentication challenge, as an administrator.
**/
export declare class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
    analyticsMetadata?: AnalyticsMetadataType;
    challengeName: ChallengeNameTypeEnum;
    challengeResponses?: Map<string, string>;
    clientId: string;
    clientMetadata?: Map<string, string>;
    contextData?: ContextDataType;
    session?: string;
    userPoolId: string;
}
