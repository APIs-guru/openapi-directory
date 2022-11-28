import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePartnerEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
