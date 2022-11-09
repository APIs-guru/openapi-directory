import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";


// ConfigListItem
/** 
 * An item in a list of <code>Config</code> objects.
**/
export class ConfigListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=configArn" })
  configArn?: string;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
