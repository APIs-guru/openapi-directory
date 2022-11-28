import { SpeakeasyBase } from "../../../internal/utils";
import { SseTypeEnum } from "./ssetypeenum";
import { SseStatusEnum } from "./ssestatusenum";
/**
 * The description of the server-side encryption status on the specified table.
**/
export declare class SseDescription extends SpeakeasyBase {
    inaccessibleEncryptionDateTime?: Date;
    kmsMasterKeyArn?: string;
    sseType?: SseTypeEnum;
    status?: SseStatusEnum;
}
