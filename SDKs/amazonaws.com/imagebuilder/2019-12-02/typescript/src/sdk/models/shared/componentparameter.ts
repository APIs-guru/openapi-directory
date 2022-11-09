import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentParameter
/** 
 * Contains a key/value pair that sets the named component parameter.
**/
export class ComponentParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string[];
}
