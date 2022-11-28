import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tmpfs
/** 
 * The container path, mount options, and size of the tmpfs mount.
**/
export class Tmpfs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPath" })
  containerPath: string;

  @SpeakeasyMetadata({ data: "json, name=mountOptions" })
  mountOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
