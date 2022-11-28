import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CC_Addresses, form, name=CC_Addresses;" })
  ccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=IsBodyHtml, form, name=IsBodyHtml;" })
  isBodyHtml: boolean;

  @SpeakeasyMetadata({ data: "json, name=MessageBody, form, name=MessageBody;" })
  messageBody: string;

  @SpeakeasyMetadata({ data: "json, name=Subject, form, name=Subject;" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=To_Addresses, form, name=To_Addresses;" })
  toAddresses: string[];
}
