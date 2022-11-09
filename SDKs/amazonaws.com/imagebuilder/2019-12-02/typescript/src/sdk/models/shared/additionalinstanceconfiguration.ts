import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemsManagerAgent } from "./systemsmanageragent";


// AdditionalInstanceConfiguration
/** 
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
export class AdditionalInstanceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=systemsManagerAgent" })
  systemsManagerAgent?: SystemsManagerAgent;

  @Metadata({ data: "json, name=userDataOverride" })
  userDataOverride?: string;
}
