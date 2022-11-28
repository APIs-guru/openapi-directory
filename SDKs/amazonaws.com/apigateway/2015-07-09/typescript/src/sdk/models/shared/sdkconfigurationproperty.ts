import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SDKConfigurationProperty
/** 
 * A configuration property of an SDK type.
**/
export class SDKConfigurationProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
