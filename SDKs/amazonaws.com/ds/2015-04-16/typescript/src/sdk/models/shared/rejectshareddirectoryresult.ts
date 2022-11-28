import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectSharedDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
