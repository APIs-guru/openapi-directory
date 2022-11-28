import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class DecreaseReplicationFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cluster" })
  cluster?: Cluster;
}
