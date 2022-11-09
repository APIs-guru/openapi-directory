import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


export class GetFileOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobId" })
  blobId: string;

  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=fileContent" })
  fileContent: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=fileSize" })
  fileSize: number;
}
