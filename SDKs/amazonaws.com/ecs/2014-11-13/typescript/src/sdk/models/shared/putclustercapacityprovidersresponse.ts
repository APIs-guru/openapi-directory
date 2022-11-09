import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


export class PutClusterCapacityProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Cluster;
}
