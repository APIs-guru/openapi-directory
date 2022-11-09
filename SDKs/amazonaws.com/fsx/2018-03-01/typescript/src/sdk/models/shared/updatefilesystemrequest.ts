import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateFileSystemLustreConfiguration } from "./updatefilesystemlustreconfiguration";
import { UpdateFileSystemOntapConfiguration } from "./updatefilesystemontapconfiguration";
import { UpdateFileSystemWindowsConfiguration } from "./updatefilesystemwindowsconfiguration";


// UpdateFileSystemRequest
/** 
 * The request object for the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: UpdateFileSystemLustreConfiguration;

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: UpdateFileSystemOntapConfiguration;

  @Metadata({ data: "json, name=StorageCapacity" })
  storageCapacity?: number;

  @Metadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: UpdateFileSystemWindowsConfiguration;
}
