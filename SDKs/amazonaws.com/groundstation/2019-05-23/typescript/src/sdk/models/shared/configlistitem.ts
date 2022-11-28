import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";



// ConfigListItem
/** 
 * An item in a list of <code>Config</code> objects.
**/
export class ConfigListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configArn" })
  configArn?: string;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
