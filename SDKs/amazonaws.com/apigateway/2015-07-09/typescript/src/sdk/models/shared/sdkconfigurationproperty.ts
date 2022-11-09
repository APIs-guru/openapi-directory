import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SdkConfigurationProperty
/** 
 * A configuration property of an SDK type.
**/
export class SdkConfigurationProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
