import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisassociateFileSystemAliasesRequest
/** 
 * The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
**/
export class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases" })
  aliases: string[];

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;
}
