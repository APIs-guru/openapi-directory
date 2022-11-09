import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Partition
/** 
 *  A partition dimension defined by an attribute. 
**/
export class Partition extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName: string;
}
