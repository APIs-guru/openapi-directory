import { SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailStatusEnum } from "./bulkemailstatusenum";
/**
 * An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
**/
export declare class BulkEmailDestinationStatus extends SpeakeasyBase {
    error?: string;
    messageId?: string;
    status?: BulkEmailStatusEnum;
}
