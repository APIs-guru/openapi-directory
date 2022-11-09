import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteFileEntry } from "./deletefileentry";
import { PutFileEntry } from "./putfileentry";
import { SetFileModeEntry } from "./setfilemodeentry";


export class CreateCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=commitMessage" })
  commitMessage?: string;

  @Metadata({ data: "json, name=deleteFiles", elemType: shared.DeleteFileEntry })
  deleteFiles?: DeleteFileEntry[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=keepEmptyFolders" })
  keepEmptyFolders?: boolean;

  @Metadata({ data: "json, name=parentCommitId" })
  parentCommitId?: string;

  @Metadata({ data: "json, name=putFiles", elemType: shared.PutFileEntry })
  putFiles?: PutFileEntry[];

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=setFileModes", elemType: shared.SetFileModeEntry })
  setFileModes?: SetFileModeEntry[];
}
