import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";
/**
 * The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
**/
export declare class DataRepositoryConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
    exportPath?: string;
    failureDetails?: DataRepositoryFailureDetails;
    importPath?: string;
    importedFileChunkSize?: number;
    lifecycle?: DataRepositoryLifecycleEnum;
}
