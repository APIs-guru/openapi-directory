import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RebootReplicationInstanceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForceFailover" })
  forceFailover?: boolean;

  @Metadata({ data: "json, name=ForcePlannedFailover" })
  forcePlannedFailover?: boolean;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
