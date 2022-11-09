import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=CC_Addresses, form, name=CC_Addresses;" })
  ccAddresses?: string[];

  @Metadata({ data: "json, name=IsBodyHtml, form, name=IsBodyHtml;" })
  isBodyHtml: boolean;

  @Metadata({ data: "json, name=MessageBody, form, name=MessageBody;" })
  messageBody: string;

  @Metadata({ data: "json, name=Subject, form, name=Subject;" })
  subject: string;

  @Metadata({ data: "json, name=To_Addresses, form, name=To_Addresses;" })
  toAddresses: string[];
}
