import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLogSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
