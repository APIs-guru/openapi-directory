import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDeliveryStreamsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamNames" })
  deliveryStreamNames: string[];

  @Metadata({ data: "json, name=HasMoreDeliveryStreams" })
  hasMoreDeliveryStreams: boolean;
}
