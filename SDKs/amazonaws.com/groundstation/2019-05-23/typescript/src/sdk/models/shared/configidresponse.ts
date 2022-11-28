import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";



// ConfigIdResponse
/** 
 * <p/>
**/
export class ConfigIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configArn" })
  configArn?: string;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;
}
