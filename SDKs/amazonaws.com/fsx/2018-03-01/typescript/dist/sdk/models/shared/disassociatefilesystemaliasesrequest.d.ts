import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
**/
export declare class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
    aliases: string[];
    clientRequestToken?: string;
    fileSystemId: string;
}
