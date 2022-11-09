import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SseStatusEnum } from "./ssestatusenum";
/**
 * The description of the server-side encryption status on the specified DAX cluster.
**/
export declare class SseDescription extends SpeakeasyBase {
    status?: SseStatusEnum;
}
