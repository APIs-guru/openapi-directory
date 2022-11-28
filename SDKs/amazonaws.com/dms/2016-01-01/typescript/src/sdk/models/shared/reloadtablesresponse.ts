import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReloadTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;
}
