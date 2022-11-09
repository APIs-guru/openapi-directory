import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStateEnum } from "./clusterstateenum";


export class InitializeClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @Metadata({ data: "json, name=StateMessage" })
  stateMessage?: string;
}
