import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class DeleteGlobalClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalCluster?: GlobalCluster;
}
