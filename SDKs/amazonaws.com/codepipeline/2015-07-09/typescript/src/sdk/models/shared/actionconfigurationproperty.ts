import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionConfigurationPropertyTypeEnum } from "./actionconfigurationpropertytypeenum";


// ActionConfigurationProperty
/** 
 * Represents information about an action configuration property.
**/
export class ActionConfigurationProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=key" })
  key: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=queryable" })
  queryable?: boolean;

  @Metadata({ data: "json, name=required" })
  required: boolean;

  @Metadata({ data: "json, name=secret" })
  secret: boolean;

  @Metadata({ data: "json, name=type" })
  type?: ActionConfigurationPropertyTypeEnum;
}
