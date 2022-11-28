import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";



// ConfigurationTag
/** 
 * Tags for a configuration item. Tags are metadata that help you categorize IT assets.
**/
export class ConfigurationTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationType" })
  configurationType?: ConfigurationItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=timeOfCreation" })
  timeOfCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
