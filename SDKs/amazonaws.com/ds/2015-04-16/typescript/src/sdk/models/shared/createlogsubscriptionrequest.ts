import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLogSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName: string;
}
