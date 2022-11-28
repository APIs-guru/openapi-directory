import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class ModifyDbClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbCluster?: DbCluster;
}
