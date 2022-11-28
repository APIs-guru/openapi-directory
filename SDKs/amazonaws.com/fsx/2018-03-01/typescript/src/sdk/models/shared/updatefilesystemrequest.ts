import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateFileSystemLustreConfiguration } from "./updatefilesystemlustreconfiguration";
import { UpdateFileSystemOntapConfiguration } from "./updatefilesystemontapconfiguration";
import { UpdateFileSystemWindowsConfiguration } from "./updatefilesystemwindowsconfiguration";



// UpdateFileSystemRequest
/** 
 * The request object for the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: UpdateFileSystemLustreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: UpdateFileSystemOntapConfiguration;

  @SpeakeasyMetadata({ data: "json, name=StorageCapacity" })
  storageCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: UpdateFileSystemWindowsConfiguration;
}
