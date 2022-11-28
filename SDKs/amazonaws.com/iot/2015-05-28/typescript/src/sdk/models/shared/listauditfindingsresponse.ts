import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditFinding } from "./auditfinding";



export class ListAuditFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: AuditFinding })
  findings?: AuditFinding[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
