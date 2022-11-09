import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


export class UpdateClusterSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Cluster;
}
