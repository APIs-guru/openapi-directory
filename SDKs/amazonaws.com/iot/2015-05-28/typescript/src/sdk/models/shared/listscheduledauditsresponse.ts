import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScheduledAuditMetadata } from "./scheduledauditmetadata";


export class ListScheduledAuditsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=scheduledAudits", elemType: shared.ScheduledAuditMetadata })
  scheduledAudits?: ScheduledAuditMetadata[];
}
