import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditFinding } from "./auditfinding";


export class ListAuditFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.AuditFinding })
  findings?: AuditFinding[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
