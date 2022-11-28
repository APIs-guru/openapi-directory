import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateFileSystemLustreConfiguration } from "./updatefilesystemlustreconfiguration";
import { UpdateFileSystemOntapConfiguration } from "./updatefilesystemontapconfiguration";
import { UpdateFileSystemWindowsConfiguration } from "./updatefilesystemwindowsconfiguration";
/**
 * The request object for the <code>UpdateFileSystem</code> operation.
**/
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    lustreConfiguration?: UpdateFileSystemLustreConfiguration;
    ontapConfiguration?: UpdateFileSystemOntapConfiguration;
    storageCapacity?: number;
    windowsConfiguration?: UpdateFileSystemWindowsConfiguration;
}
