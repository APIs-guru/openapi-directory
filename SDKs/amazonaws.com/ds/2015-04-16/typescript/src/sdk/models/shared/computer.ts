import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


// Computer
/** 
 * Contains information about a computer account in a directory.
**/
export class Computer extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputerAttributes", elemType: shared.Attribute })
  computerAttributes?: Attribute[];

  @Metadata({ data: "json, name=ComputerId" })
  computerId?: string;

  @Metadata({ data: "json, name=ComputerName" })
  computerName?: string;
}
