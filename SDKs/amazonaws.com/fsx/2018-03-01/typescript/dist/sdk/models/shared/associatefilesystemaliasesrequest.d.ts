import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.
**/
export declare class AssociateFileSystemAliasesRequest extends SpeakeasyBase {
    aliases: string[];
    clientRequestToken?: string;
    fileSystemId: string;
}
