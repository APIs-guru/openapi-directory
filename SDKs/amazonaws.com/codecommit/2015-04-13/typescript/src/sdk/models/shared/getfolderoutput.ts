import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Folder } from "./folder";
import { SubModule } from "./submodule";
import { SymbolicLink } from "./symboliclink";



export class GetFolderOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=folderPath" })
  folderPath: string;

  @SpeakeasyMetadata({ data: "json, name=subFolders", elemType: Folder })
  subFolders?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=subModules", elemType: SubModule })
  subModules?: SubModule[];

  @SpeakeasyMetadata({ data: "json, name=symbolicLinks", elemType: SymbolicLink })
  symbolicLinks?: SymbolicLink[];

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
