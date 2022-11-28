import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameEnum } from "./attributenameenum";



// Trait
/** 
 *  Provides contextual information about the extracted entity. 
**/
export class Trait extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: AttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;
}
