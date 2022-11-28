import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BootstrapActionConfig } from "./bootstrapactionconfig";



// BootstrapActionDetail
/** 
 * Reports the configuration of a bootstrap action in a cluster (job flow).
**/
export class BootstrapActionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BootstrapActionConfig" })
  bootstrapActionConfig?: BootstrapActionConfig;
}
