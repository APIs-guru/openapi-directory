import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnshareDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
