import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimumHealthyHostsTypeEnum } from "./minimumhealthyhoststypeenum";



// MinimumHealthyHosts
/** 
 * Information about minimum healthy instance.
**/
export class MinimumHealthyHosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MinimumHealthyHostsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
