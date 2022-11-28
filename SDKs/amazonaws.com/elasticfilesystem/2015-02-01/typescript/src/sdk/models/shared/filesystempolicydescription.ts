import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileSystemPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
