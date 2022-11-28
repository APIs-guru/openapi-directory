import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleTask } from "./bundletask";



export class DescribeBundleTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BundleTask })
  bundleTasks?: BundleTask[];
}
