import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeNameEnum } from "./attributenameenum";


// Trait
/** 
 *  Provides contextual information about the extracted entity. 
**/
export class Trait extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: AttributeNameEnum;

  @Metadata({ data: "json, name=Score" })
  score?: number;
}
