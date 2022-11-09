import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableDirectoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
