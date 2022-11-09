import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tmpfs
/** 
 * The container path, mount options, and size of the tmpfs mount.
**/
export class Tmpfs extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath: string;

  @Metadata({ data: "json, name=mountOptions" })
  mountOptions?: string[];

  @Metadata({ data: "json, name=size" })
  size: number;
}
