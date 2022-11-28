import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchDestinationUpdate } from "./elasticsearchdestinationupdate";
import { ExtendedS3DestinationUpdate } from "./extendeds3destinationupdate";
import { HttpEndpointDestinationUpdate } from "./httpendpointdestinationupdate";
import { RedshiftDestinationUpdate } from "./redshiftdestinationupdate";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { SplunkDestinationUpdate } from "./splunkdestinationupdate";



export class UpdateDestinationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentDeliveryStreamVersionId" })
  currentDeliveryStreamVersionId: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationId" })
  destinationId: string;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationUpdate" })
  elasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationUpdate" })
  extendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationUpdate" })
  httpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDestinationUpdate" })
  redshiftDestinationUpdate?: RedshiftDestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=S3DestinationUpdate" })
  s3DestinationUpdate?: S3DestinationUpdate;

  @SpeakeasyMetadata({ data: "json, name=SplunkDestinationUpdate" })
  splunkDestinationUpdate?: SplunkDestinationUpdate;
}
