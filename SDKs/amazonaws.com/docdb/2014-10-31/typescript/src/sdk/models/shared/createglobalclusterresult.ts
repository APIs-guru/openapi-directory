import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class CreateGlobalClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalCluster?: GlobalCluster;
}
