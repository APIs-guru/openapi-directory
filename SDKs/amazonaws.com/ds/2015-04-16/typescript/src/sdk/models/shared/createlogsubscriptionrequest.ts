import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLogSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName: string;
}
