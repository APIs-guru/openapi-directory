import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";
import { Folder } from "./folder";
import { SubModule } from "./submodule";
import { SymbolicLink } from "./symboliclink";


export class GetFolderOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];

  @Metadata({ data: "json, name=folderPath" })
  folderPath: string;

  @Metadata({ data: "json, name=subFolders", elemType: shared.Folder })
  subFolders?: Folder[];

  @Metadata({ data: "json, name=subModules", elemType: shared.SubModule })
  subModules?: SubModule[];

  @Metadata({ data: "json, name=symbolicLinks", elemType: shared.SymbolicLink })
  symbolicLinks?: SymbolicLink[];

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
