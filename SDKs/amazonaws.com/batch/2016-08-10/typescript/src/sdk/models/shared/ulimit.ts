import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Ulimit
/** 
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export class Ulimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=hardLimit" })
  hardLimit: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=softLimit" })
  softLimit: number;
}
