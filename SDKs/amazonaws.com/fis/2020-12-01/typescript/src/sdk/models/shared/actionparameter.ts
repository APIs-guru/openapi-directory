import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionParameter
/** 
 * Describes a parameter for an action.
**/
export class ActionParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
