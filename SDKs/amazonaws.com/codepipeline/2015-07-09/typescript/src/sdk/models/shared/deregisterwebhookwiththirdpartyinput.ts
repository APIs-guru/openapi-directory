import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterWebhookWithThirdPartyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookName" })
  webhookName?: string;
}
