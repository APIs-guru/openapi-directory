import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileSystemPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}
