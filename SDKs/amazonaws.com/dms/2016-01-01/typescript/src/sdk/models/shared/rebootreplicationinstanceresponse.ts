import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationInstance } from "./replicationinstance";


export class RebootReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
