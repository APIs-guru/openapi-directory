import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
