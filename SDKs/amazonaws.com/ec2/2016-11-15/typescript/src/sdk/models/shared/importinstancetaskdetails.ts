import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ImportInstanceVolumeDetailItem } from "./importinstancevolumedetailitem";



// ImportInstanceTaskDetails
/** 
 * Describes an import instance task.
**/
export class ImportInstanceTaskDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  platform?: PlatformValuesEnum;

  @SpeakeasyMetadata({ elemType: ImportInstanceVolumeDetailItem })
  volumes?: ImportInstanceVolumeDetailItem[];
}
