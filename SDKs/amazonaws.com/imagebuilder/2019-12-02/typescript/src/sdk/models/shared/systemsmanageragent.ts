import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SystemsManagerAgent
/** 
 * Contains settings for the SSM agent on your build instance.
**/
export class SystemsManagerAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=uninstallAfterBuild" })
  uninstallAfterBuild?: boolean;
}
