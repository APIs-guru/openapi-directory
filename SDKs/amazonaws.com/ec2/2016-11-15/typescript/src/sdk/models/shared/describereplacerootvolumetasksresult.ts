import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplaceRootVolumeTask } from "./replacerootvolumetask";



export class DescribeReplaceRootVolumeTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ReplaceRootVolumeTask })
  replaceRootVolumeTasks?: ReplaceRootVolumeTask[];
}
