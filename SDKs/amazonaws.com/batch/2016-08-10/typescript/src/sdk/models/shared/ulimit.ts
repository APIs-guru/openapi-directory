import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ulimit
/** 
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export class Ulimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hardLimit" })
  hardLimit: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=softLimit" })
  softLimit: number;
}
