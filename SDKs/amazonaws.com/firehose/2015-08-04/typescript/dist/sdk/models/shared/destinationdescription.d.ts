import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticsearchDestinationDescription } from "./elasticsearchdestinationdescription";
import { ExtendedS3DestinationDescription } from "./extendeds3destinationdescription";
import { HttpEndpointDestinationDescription } from "./httpendpointdestinationdescription";
import { RedshiftDestinationDescription } from "./redshiftdestinationdescription";
import { S3DestinationDescription } from "./s3destinationdescription";
import { SplunkDestinationDescription } from "./splunkdestinationdescription";
/**
 * Describes the destination for a delivery stream.
**/
export declare class DestinationDescription extends SpeakeasyBase {
    destinationId: string;
    elasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
    extendedS3DestinationDescription?: ExtendedS3DestinationDescription;
    httpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
    redshiftDestinationDescription?: RedshiftDestinationDescription;
    s3DestinationDescription?: S3DestinationDescription;
    splunkDestinationDescription?: SplunkDestinationDescription;
}
