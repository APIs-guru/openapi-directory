import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAuditMetadata } from "./scheduledauditmetadata";



export class ListScheduledAuditsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledAudits", elemType: ScheduledAuditMetadata })
  scheduledAudits?: ScheduledAuditMetadata[];
}
