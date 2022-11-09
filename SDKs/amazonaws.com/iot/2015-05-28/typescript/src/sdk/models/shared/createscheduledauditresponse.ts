import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateScheduledAuditResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;
}
