import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateFileSystemAliasesRequest
/** 
 * The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
**/
export class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases" })
  aliases: string[];

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;
}
