import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotifyEmailType } from "./notifyemailtype";
import { NotifyEmailType } from "./notifyemailtype";
import { NotifyEmailType } from "./notifyemailtype";


// NotifyConfigurationType
/** 
 * The notify configuration type.
**/
export class NotifyConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockEmail" })
  blockEmail?: NotifyEmailType;

  @Metadata({ data: "json, name=From" })
  from?: string;

  @Metadata({ data: "json, name=MfaEmail" })
  mfaEmail?: NotifyEmailType;

  @Metadata({ data: "json, name=NoActionEmail" })
  noActionEmail?: NotifyEmailType;

  @Metadata({ data: "json, name=ReplyTo" })
  replyTo?: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn: string;
}
