import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tmpfs
/** 
 * <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export class Tmpfs extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath: string;

  @Metadata({ data: "json, name=mountOptions" })
  mountOptions?: string[];

  @Metadata({ data: "json, name=size" })
  size: number;
}
