import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";



export class InitializeClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateMessage" })
  stateMessage?: string;
}
