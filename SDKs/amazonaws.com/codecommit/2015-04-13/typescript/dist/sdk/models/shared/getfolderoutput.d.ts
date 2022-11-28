import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Folder } from "./folder";
import { SubModule } from "./submodule";
import { SymbolicLink } from "./symboliclink";
export declare class GetFolderOutput extends SpeakeasyBase {
    commitId: string;
    files?: File[];
    folderPath: string;
    subFolders?: Folder[];
    subModules?: SubModule[];
    symbolicLinks?: SymbolicLink[];
    treeId?: string;
}
