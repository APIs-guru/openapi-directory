import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePartnerEventSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
