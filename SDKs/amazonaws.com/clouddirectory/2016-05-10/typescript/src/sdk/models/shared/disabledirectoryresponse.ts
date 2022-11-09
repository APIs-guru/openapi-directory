import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableDirectoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
