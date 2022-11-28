import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MountPoint
/** 
 * Details on a volume mount point that is used in a container definition.
**/
export class MountPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceVolume" })
  sourceVolume?: string;
}
