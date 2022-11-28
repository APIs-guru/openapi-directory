import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSetting } from "./clustersetting";
export declare class UpdateClusterSettingsRequest extends SpeakeasyBase {
    cluster: string;
    settings: ClusterSetting[];
}
