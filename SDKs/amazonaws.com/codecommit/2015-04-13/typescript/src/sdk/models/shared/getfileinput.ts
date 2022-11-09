import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFileInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitSpecifier" })
  commitSpecifier?: string;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
