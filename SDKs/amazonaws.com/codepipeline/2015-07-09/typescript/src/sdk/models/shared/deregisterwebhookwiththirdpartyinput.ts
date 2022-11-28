import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterWebhookWithThirdPartyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookName" })
  webhookName?: string;
}
