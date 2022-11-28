import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootReplicationInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForceFailover" })
  forceFailover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ForcePlannedFailover" })
  forcePlannedFailover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
