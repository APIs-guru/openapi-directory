import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";


// ConfigurationTag
/** 
 * Tags for a configuration item. Tags are metadata that help you categorize IT assets.
**/
export class ConfigurationTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @Metadata({ data: "json, name=configurationType" })
  configurationType?: ConfigurationItemTypeEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=timeOfCreation" })
  timeOfCreation?: Date;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
