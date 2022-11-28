import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentParameter
/** 
 * Contains a key/value pair that sets the named component parameter.
**/
export class ComponentParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string[];
}
