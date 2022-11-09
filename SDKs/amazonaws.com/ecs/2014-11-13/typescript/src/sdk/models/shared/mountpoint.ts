import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MountPoint
/** 
 * Details on a volume mount point that is used in a container definition.
**/
export class MountPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=sourceVolume" })
  sourceVolume?: string;
}
