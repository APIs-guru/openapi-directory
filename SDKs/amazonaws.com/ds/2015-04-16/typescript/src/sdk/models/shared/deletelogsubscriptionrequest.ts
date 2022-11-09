import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLogSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
