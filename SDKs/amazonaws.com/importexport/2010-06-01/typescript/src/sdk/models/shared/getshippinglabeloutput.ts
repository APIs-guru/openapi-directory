import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShippingLabelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  shippingLabelUrl?: string;

  @SpeakeasyMetadata()
  warning?: string;
}
