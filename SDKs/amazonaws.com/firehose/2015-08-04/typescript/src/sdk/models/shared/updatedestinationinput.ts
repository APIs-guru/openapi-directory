import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ElasticsearchDestinationUpdate } from "./elasticsearchdestinationupdate";
import { ExtendedS3DestinationUpdate } from "./extendeds3destinationupdate";
import { HttpEndpointDestinationUpdate } from "./httpendpointdestinationupdate";
import { RedshiftDestinationUpdate } from "./redshiftdestinationupdate";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { SplunkDestinationUpdate } from "./splunkdestinationupdate";


export class UpdateDestinationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentDeliveryStreamVersionId" })
  currentDeliveryStreamVersionId: string;

  @Metadata({ data: "json, name=DeliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=DestinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=ElasticsearchDestinationUpdate" })
  elasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

  @Metadata({ data: "json, name=ExtendedS3DestinationUpdate" })
  extendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

  @Metadata({ data: "json, name=HttpEndpointDestinationUpdate" })
  httpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;

  @Metadata({ data: "json, name=RedshiftDestinationUpdate" })
  redshiftDestinationUpdate?: RedshiftDestinationUpdate;

  @Metadata({ data: "json, name=S3DestinationUpdate" })
  s3DestinationUpdate?: S3DestinationUpdate;

  @Metadata({ data: "json, name=SplunkDestinationUpdate" })
  splunkDestinationUpdate?: SplunkDestinationUpdate;
}
