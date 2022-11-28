import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDeliveryStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamNames" })
  deliveryStreamNames: string[];

  @SpeakeasyMetadata({ data: "json, name=HasMoreDeliveryStreams" })
  hasMoreDeliveryStreams: boolean;
}
