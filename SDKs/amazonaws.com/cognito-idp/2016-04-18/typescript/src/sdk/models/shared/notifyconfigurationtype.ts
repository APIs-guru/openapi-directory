import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotifyEmailType } from "./notifyemailtype";



// NotifyConfigurationType
/** 
 * The notify configuration type.
**/
export class NotifyConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockEmail" })
  blockEmail?: NotifyEmailType;

  @SpeakeasyMetadata({ data: "json, name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=MfaEmail" })
  mfaEmail?: NotifyEmailType;

  @SpeakeasyMetadata({ data: "json, name=NoActionEmail" })
  noActionEmail?: NotifyEmailType;

  @SpeakeasyMetadata({ data: "json, name=ReplyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;
}
