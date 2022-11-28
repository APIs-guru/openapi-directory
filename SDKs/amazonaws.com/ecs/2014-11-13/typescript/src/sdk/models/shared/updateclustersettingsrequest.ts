import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSetting } from "./clustersetting";



export class UpdateClusterSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ClusterSetting })
  settings: ClusterSetting[];
}
