import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterSetting } from "./clustersetting";


export class UpdateClusterSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=settings", elemType: shared.ClusterSetting })
  settings: ClusterSetting[];
}
