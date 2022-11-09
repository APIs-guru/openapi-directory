import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


// CreateComputerRequest
/** 
 * Contains the inputs for the <a>CreateComputer</a> operation.
**/
export class CreateComputerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputerAttributes", elemType: shared.Attribute })
  computerAttributes?: Attribute[];

  @Metadata({ data: "json, name=ComputerName" })
  computerName: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @Metadata({ data: "json, name=Password" })
  password: string;
}
