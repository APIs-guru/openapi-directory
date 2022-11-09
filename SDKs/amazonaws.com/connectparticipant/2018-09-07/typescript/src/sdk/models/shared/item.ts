import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentItem } from "./attachmentitem";
import { ParticipantRoleEnum } from "./participantroleenum";
import { ChatItemTypeEnum } from "./chatitemtypeenum";


// Item
/** 
 * An item - message or event - that has been sent. 
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @Metadata({ data: "json, name=Attachments", elemType: shared.AttachmentItem })
  attachments?: AttachmentItem[];

  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ParticipantId" })
  participantId?: string;

  @Metadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ChatItemTypeEnum;
}
