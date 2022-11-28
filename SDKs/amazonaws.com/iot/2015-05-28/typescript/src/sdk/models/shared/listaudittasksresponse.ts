import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditTaskMetadata } from "./audittaskmetadata";



export class ListAuditTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: AuditTaskMetadata })
  tasks?: AuditTaskMetadata[];
}
