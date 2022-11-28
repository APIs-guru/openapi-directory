import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;
}
