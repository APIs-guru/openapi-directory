import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectSharedDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
