import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



// CreateComputerRequest
/** 
 * Contains the inputs for the <a>CreateComputer</a> operation.
**/
export class CreateComputerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputerAttributes", elemType: Attribute })
  computerAttributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=ComputerName" })
  computerName: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;
}
