import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tmpfs
/** 
 * <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export class Tmpfs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPath" })
  containerPath: string;

  @SpeakeasyMetadata({ data: "json, name=mountOptions" })
  mountOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
