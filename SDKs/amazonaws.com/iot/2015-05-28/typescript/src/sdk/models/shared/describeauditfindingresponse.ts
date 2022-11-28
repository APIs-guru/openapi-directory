import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditFinding } from "./auditfinding";



export class DescribeAuditFindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: AuditFinding;
}
