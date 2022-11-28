import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigTypeData } from "./configtypedata";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";



// GetConfigResponse
/** 
 * <p/>
**/
export class GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configArn" })
  configArn: string;

  @SpeakeasyMetadata({ data: "json, name=configData" })
  configData: ConfigTypeData;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
