import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alias } from "./alias";


// DisassociateFileSystemAliasesResponse
/** 
 * The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.
**/
export class DisassociateFileSystemAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.Alias })
  aliases?: Alias[];
}
