import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Partition
/** 
 *  A partition dimension defined by an attribute. 
**/
export class Partition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName: string;
}
