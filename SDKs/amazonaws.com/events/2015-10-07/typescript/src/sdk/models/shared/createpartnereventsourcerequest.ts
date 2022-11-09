import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePartnerEventSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
