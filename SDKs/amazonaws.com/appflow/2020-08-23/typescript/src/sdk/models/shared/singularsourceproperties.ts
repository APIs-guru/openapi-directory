import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingularSourceProperties
/** 
 *  The properties that are applied when Singular is being used as a source. 
**/
export class SingularSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
