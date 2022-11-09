import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFileInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=commitMessage" })
  commitMessage?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=keepEmptyFolders" })
  keepEmptyFolders?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentCommitId" })
  parentCommitId: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
