import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


export class RegisterClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Cluster;
}
