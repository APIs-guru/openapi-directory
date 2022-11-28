import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



// Computer
/** 
 * Contains information about a computer account in a directory.
**/
export class Computer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputerAttributes", elemType: Attribute })
  computerAttributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=ComputerId" })
  computerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComputerName" })
  computerName?: string;
}
