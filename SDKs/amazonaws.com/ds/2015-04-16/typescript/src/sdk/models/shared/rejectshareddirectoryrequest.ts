import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectSharedDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId: string;
}
