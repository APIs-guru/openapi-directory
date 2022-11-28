import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFolderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitSpecifier" })
  commitSpecifier?: string;

  @SpeakeasyMetadata({ data: "json, name=folderPath" })
  folderPath: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
