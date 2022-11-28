import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterWebhookWithThirdPartyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookName" })
  webhookName?: string;
}
