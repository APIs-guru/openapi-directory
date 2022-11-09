import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFolderInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitSpecifier" })
  commitSpecifier?: string;

  @Metadata({ data: "json, name=folderPath" })
  folderPath: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
