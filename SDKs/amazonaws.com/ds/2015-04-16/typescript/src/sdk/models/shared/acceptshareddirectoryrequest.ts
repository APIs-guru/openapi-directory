import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptSharedDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId: string;
}
