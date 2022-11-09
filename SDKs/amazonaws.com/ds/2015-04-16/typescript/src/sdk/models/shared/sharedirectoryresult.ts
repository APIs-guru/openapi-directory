import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShareDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
