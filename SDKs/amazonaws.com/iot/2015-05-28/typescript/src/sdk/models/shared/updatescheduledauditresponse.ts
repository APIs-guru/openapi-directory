import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateScheduledAuditResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;
}
