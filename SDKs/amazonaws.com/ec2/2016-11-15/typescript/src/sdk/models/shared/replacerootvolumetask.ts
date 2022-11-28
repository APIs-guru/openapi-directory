import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ReplaceRootVolumeTaskStateEnum } from "./replacerootvolumetaskstateenum";



// ReplaceRootVolumeTask
/** 
 * Information about a root volume replacement task.
**/
export class ReplaceRootVolumeTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completeTime?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  replaceRootVolumeTaskId?: string;

  @SpeakeasyMetadata()
  startTime?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  taskState?: ReplaceRootVolumeTaskStateEnum;
}
