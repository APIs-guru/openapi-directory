import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStateChange } from "./attachmentstatechange";
export declare class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
    attachments: AttachmentStateChange[];
    cluster?: string;
}
