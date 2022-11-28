import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePartnerEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
