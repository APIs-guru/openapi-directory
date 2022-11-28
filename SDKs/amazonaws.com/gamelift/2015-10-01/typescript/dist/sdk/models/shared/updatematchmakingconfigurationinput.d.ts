import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateMatchmakingConfigurationInput extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    acceptanceTimeoutSeconds?: number;
    additionalPlayerCount?: number;
    backfillMode?: BackfillModeEnum;
    customEventData?: string;
    description?: string;
    flexMatchMode?: FlexMatchModeEnum;
    gameProperties?: GameProperty[];
    gameSessionData?: string;
    gameSessionQueueArns?: string[];
    name: string;
    notificationTarget?: string;
    requestTimeoutSeconds?: number;
    ruleSetName?: string;
}
