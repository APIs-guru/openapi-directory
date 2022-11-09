import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterWebhookWithThirdPartyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookName" })
  webhookName?: string;
}
