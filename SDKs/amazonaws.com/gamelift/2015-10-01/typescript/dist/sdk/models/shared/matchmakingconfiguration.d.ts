import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";
/**
 * Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
**/
export declare class MatchmakingConfiguration extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    acceptanceTimeoutSeconds?: number;
    additionalPlayerCount?: number;
    backfillMode?: BackfillModeEnum;
    configurationArn?: string;
    creationTime?: Date;
    customEventData?: string;
    description?: string;
    flexMatchMode?: FlexMatchModeEnum;
    gameProperties?: GameProperty[];
    gameSessionData?: string;
    gameSessionQueueArns?: string[];
    name?: string;
    notificationTarget?: string;
    requestTimeoutSeconds?: number;
    ruleSetArn?: string;
    ruleSetName?: string;
}
