import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingularSourceProperties
/** 
 *  The properties that are applied when Singular is being used as a source. 
**/
export class SingularSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
