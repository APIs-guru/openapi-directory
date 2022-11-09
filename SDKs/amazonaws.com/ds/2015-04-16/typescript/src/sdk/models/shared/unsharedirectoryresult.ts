import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnshareDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
