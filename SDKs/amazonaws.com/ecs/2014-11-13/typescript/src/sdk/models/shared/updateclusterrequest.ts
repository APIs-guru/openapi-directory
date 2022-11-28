import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterSetting } from "./clustersetting";



export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ClusterSetting })
  settings?: ClusterSetting[];
}
