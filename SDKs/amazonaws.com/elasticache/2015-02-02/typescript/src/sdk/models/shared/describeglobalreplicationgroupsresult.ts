import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroup } from "./globalreplicationgroup";



export class DescribeGlobalReplicationGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GlobalReplicationGroup })
  globalReplicationGroups?: GlobalReplicationGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
