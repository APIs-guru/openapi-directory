import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MinimumHealthyHostsTypeEnum } from "./minimumhealthyhoststypeenum";


// MinimumHealthyHosts
/** 
 * Information about minimum healthy instance.
**/
export class MinimumHealthyHosts extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: MinimumHealthyHostsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
