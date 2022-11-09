import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


export class DeleteClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cluster" })
  cluster?: Cluster;
}
