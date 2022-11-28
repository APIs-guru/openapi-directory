import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



export class GetFileOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=fileContent" })
  fileContent: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize: number;
}
