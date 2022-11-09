import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptContainerDetail } from "./attemptcontainerdetail";
/**
 * An object representing a job attempt.
**/
export declare class AttemptDetail extends SpeakeasyBase {
    container?: AttemptContainerDetail;
    startedAt?: number;
    statusReason?: string;
    stoppedAt?: number;
}
