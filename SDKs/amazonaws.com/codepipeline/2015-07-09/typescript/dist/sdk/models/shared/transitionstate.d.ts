import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents information about the state of transitions between one stage and another stage.
**/
export declare class TransitionState extends SpeakeasyBase {
    disabledReason?: string;
    enabled?: boolean;
    lastChangedAt?: Date;
    lastChangedBy?: string;
}
