import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReloadTablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;
}
