import { SpeakeasyBase } from "../../../internal/utils";
import { NotifyEmailType } from "./notifyemailtype";
/**
 * The notify configuration type.
**/
export declare class NotifyConfigurationType extends SpeakeasyBase {
    blockEmail?: NotifyEmailType;
    from?: string;
    mfaEmail?: NotifyEmailType;
    noActionEmail?: NotifyEmailType;
    replyTo?: string;
    sourceArn: string;
}
