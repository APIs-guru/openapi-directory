import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptSharedDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId: string;
}
