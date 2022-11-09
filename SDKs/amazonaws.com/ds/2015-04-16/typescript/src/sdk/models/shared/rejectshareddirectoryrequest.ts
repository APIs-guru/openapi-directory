import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectSharedDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId: string;
}
