import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentParameterDetail
/** 
 * Defines a parameter that is used to provide configuration details for the component.
**/
export class ComponentParameterDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
