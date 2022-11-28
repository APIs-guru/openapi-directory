import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class RemoveFromGlobalClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalCluster?: GlobalCluster;
}
