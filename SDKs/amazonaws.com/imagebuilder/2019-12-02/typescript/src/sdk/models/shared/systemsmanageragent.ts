import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SystemsManagerAgent
/** 
 * Contains settings for the SSM agent on your build instance.
**/
export class SystemsManagerAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uninstallAfterBuild" })
  uninstallAfterBuild?: boolean;
}
