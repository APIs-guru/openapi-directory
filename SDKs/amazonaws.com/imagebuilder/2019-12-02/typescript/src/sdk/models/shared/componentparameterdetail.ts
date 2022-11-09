import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentParameterDetail
/** 
 * Defines a parameter that is used to provide configuration details for the component.
**/
export class ComponentParameterDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
