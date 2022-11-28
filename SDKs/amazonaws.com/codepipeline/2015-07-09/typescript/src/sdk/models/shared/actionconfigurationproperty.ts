import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionConfigurationPropertyTypeEnum } from "./actionconfigurationpropertytypeenum";



// ActionConfigurationProperty
/** 
 * Represents information about an action configuration property.
**/
export class ActionConfigurationProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=queryable" })
  queryable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActionConfigurationPropertyTypeEnum;
}
