import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateFileSystemAliasesRequest
/** 
 * The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.
**/
export class AssociateFileSystemAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases" })
  aliases: string[];

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;
}
