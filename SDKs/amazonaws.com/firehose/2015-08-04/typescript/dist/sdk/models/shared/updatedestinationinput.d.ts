import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchDestinationUpdate } from "./elasticsearchdestinationupdate";
import { ExtendedS3DestinationUpdate } from "./extendeds3destinationupdate";
import { HttpEndpointDestinationUpdate } from "./httpendpointdestinationupdate";
import { RedshiftDestinationUpdate } from "./redshiftdestinationupdate";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { SplunkDestinationUpdate } from "./splunkdestinationupdate";
export declare class UpdateDestinationInput extends SpeakeasyBase {
    currentDeliveryStreamVersionId: string;
    deliveryStreamName: string;
    destinationId: string;
    elasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
    extendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
    httpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
    redshiftDestinationUpdate?: RedshiftDestinationUpdate;
    s3DestinationUpdate?: S3DestinationUpdate;
    splunkDestinationUpdate?: SplunkDestinationUpdate;
}
