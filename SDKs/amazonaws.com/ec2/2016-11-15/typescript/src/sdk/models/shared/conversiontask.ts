import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportInstanceTaskDetails } from "./importinstancetaskdetails";
import { ImportVolumeTaskDetails } from "./importvolumetaskdetails";
import { ConversionTaskStateEnum } from "./conversiontaskstateenum";
import { Tag } from "./tag";



// ConversionTask
/** 
 * Describes a conversion task.
**/
export class ConversionTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTaskId?: string;

  @SpeakeasyMetadata()
  expirationTime?: string;

  @SpeakeasyMetadata()
  importInstance?: ImportInstanceTaskDetails;

  @SpeakeasyMetadata()
  importVolume?: ImportVolumeTaskDetails;

  @SpeakeasyMetadata()
  state?: ConversionTaskStateEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
