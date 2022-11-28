import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentItem } from "./attachmentitem";
import { ParticipantRoleEnum } from "./participantroleenum";
import { ChatItemTypeEnum } from "./chatitemtypeenum";



// Item
/** 
 * An item - message or event - that has been sent. 
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: AttachmentItem })
  attachments?: AttachmentItem[];

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ParticipantId" })
  participantId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ChatItemTypeEnum;
}
