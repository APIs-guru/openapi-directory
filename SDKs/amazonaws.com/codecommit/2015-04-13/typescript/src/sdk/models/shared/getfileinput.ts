import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitSpecifier" })
  commitSpecifier?: string;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
