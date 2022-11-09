import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebhookInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectName" })
  projectName: string;
}
