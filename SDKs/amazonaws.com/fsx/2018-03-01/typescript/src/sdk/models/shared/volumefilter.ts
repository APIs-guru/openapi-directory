import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeFilterNameEnum } from "./volumefilternameenum";



// VolumeFilter
/** 
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP volumes. You can use multiple filters to return results that meet all applied filter requirements.
**/
export class VolumeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: VolumeFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
