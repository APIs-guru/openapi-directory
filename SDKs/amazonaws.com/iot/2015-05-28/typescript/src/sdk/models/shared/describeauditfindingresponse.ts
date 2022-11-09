import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditFinding } from "./auditfinding";


export class DescribeAuditFindingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=finding" })
  finding?: AuditFinding;
}
