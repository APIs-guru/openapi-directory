import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionParameter
/** 
 * Describes a parameter for an action.
**/
export class ActionParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
