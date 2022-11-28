import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateScheduledAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;
}
