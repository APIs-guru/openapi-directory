import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShareDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
