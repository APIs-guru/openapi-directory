import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";


// ConfigIdResponse
/** 
 * <p/>
**/
export class ConfigIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configArn" })
  configArn?: string;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;
}
