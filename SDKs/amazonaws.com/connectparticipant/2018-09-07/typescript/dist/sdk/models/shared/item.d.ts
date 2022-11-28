import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentItem } from "./attachmentitem";
import { ParticipantRoleEnum } from "./participantroleenum";
import { ChatItemTypeEnum } from "./chatitemtypeenum";
/**
 * An item - message or event - that has been sent.
**/
export declare class Item extends SpeakeasyBase {
    absoluteTime?: string;
    attachments?: AttachmentItem[];
    content?: string;
    contentType?: string;
    displayName?: string;
    id?: string;
    participantId?: string;
    participantRole?: ParticipantRoleEnum;
    type?: ChatItemTypeEnum;
}
