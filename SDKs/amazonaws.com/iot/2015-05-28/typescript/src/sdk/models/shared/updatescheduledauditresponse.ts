import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateScheduledAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;
}
