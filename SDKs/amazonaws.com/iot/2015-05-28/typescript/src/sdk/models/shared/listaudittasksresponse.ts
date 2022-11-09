import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditTaskMetadata } from "./audittaskmetadata";


export class ListAuditTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.AuditTaskMetadata })
  tasks?: AuditTaskMetadata[];
}
