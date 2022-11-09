import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDirectoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
