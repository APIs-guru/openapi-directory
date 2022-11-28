import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstance } from "./replicationinstance";



export class RebootReplicationInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
