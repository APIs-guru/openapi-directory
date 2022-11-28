import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
/**
 * The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.
**/
export declare class DisassociateFileSystemAliasesResponse extends SpeakeasyBase {
    aliases?: Alias[];
}
